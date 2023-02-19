/**
 * This script updates the plane identifiers badge.
 */
const fs = require("fs");
const core = require("@actions/core");

/**
 * Main function.
 */
const main = async () => {
  // Count the number of plane identifiers.
  console.log("Counting the number of plane identifiers...");
  const planes = JSON.parse(fs.readFileSync("src/data/planes.json", "utf8"));
  const planes_count = Object.keys(planes).length;
  console.log(`Number of plane identifiers: ${planes_count}`);

  // Update the planes badge.
  console.log("Updating the planes badge...");
  const badge = JSON.parse(
    fs.readFileSync("src/data/plane_identifiers_badge.json", "utf8")
  );
  if (planes_count === Number(badge.message)) {
    console.log("Planes badge is up to date.");
    core.setOutput("badge_updated", false);
    return;
  }
  badge.message = planes_count.toString();
  fs.writeFileSync(
    "src/data/plane_identifiers_badge.json",
    JSON.stringify(badge, null, 2)
  );
  console.log("Planes badge updated.");
  core.setOutput("badge_updated", true);
};

main();
