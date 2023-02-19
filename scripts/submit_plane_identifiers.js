/**
 * %@file Small npm script that can be used to anonymously submit a PR to the
 * jettracker-io/plane-identifiers repo. See
 * https://github.com/jettracker-io/plane-identifiers#how-to-contribute for more
 * information.
 */
import fs from "fs";
import util from "util";
import minimist from "minimist";
import { sortObj } from "./common.js";
import exec from "child_process";

const PRB0T_API =
  "https://xrbhog4g8g.execute-api.eu-west-2.amazonaws.com/prod/prb0t";
const PRBOT_REQUEST_BODY = {
  user: "jettracker-io",
  repo: "plane-identifiers",
  title: ":airplane: update 'plane_identifiers.json'",
  commit: "feat: update 'plane_identifiers.json'",
  description: "A change to 'plane_identifiers.json' was submitted.",
  files: [
    {
      path: "src/data/plane_identifiers.json",
      content: "{}",
    },
  ],
};

/**
 * Check if the plane_identifiers.json file has changed.
 * @returns {boolean} True if the plane_identifiers.json file has changed.
 */
async function planesJSONChanged() {
  const { stdout } = await exec("git diff src/data/plane_identifiers.json");
  return stdout.length > 0;
}

/**
 * Check if variable is string.
 *
 * @param {*} value Variable to check.
 * @returns Boolean specifying whether variable is a string.
 */
const isString = (value) => {
  return value?.constructor === String;
};

/**
 * Main function.
 */
const main = async () => {
  var commit_message = "feat: update 'plane_identifiers.json'";
  var description = "A change to 'plane_identifiers.json' was submitted.";

  // Parse the command line arguments.
  const args = minimist(process.argv);
  if (args.h || args.help) {
    console.log(
      "Usage: npm run submit_planes_json -m [OPTIONAL: commit message <STRING>] -d [OPTIONAL: pull request description <STRING>]"
    );
    return;
  }
  if ((args.m && !isString(args.m)) || (args.d && !isString(args.d))) {
    if (!isString(args.m) && !isString(args.d)) {
      console.log("Commit message must be a string.");
    } else if (!isString(args.d)) {
      console.log("Description must be a string.");
    } else {
      console.log("Commit message must be a string.");
    }
    return;
  }
  commit_message = args.m ? args.m : PRBOT_REQUEST_BODY.commit;
  description = args.d ? args.d : PRBOT_REQUEST_BODY.description;

  // Check if plane_identifiers.json has changed.
  const changed = await planesJSONChanged();
  if (!changed) {
    console.log("No changes to 'plane_identifiers.json'.");
    return;
  }
  console.log("Changes found in 'plane_identifiers.json'.");

  // Read the plane_identifiers.json file.
  console.log("Reading 'plane_identifiers.json'...");
  let rawdata = fs.readFileSync("./src/data/plane_identifiers.json");
  let planes = sortObj(JSON.parse(rawdata));
  if (commit_message !== null) {
    PRBOT_REQUEST_BODY.commit = commit_message;
  }
  if (description !== null) {
    PRBOT_REQUEST_BODY.description = description;
  }
  PRBOT_REQUEST_BODY.files[0].content = JSON.stringify(planes, null, 2);

  // Check if the planes identifiers badge needs to be updated.
  const planes_count = Object.keys(planes).length;
  const badge = JSON.parse(
    fs.readFileSync("src/data/plane_identifiers_badge.json", "utf8")
  );
  if (planes_count === Number(badge.message)) {
    console.log("Planes badge is up to date.");
  } else {
    console.log("Updating planes badge...");
    badge.message = planes_count.toString();
    PRBOT_REQUEST_BODY.files.push({
      path: "src/data/plane_identifiers_badge.json",
      content: JSON.stringify(badge, null, 2),
    });
  }

  // Submit the PR.
  console.log("Submitting changes anonymously...");
  fetch(PRB0T_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(PRBOT_REQUEST_BODY),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Anonymous PR submitted: ${data.html_url}`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

try {
  main(process.argv);
} catch (e) {
  console.error(e);
}
