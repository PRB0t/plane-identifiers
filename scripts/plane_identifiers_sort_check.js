/**
 * @file Small script to check if plane_identifiers.json is sorted correctly.
 */
import fs from "fs";
import core from "@actions/core";
import { sortObj } from "./common.js";

/**
 * Main function.
 */
const main = async () => {
  let rawdata = fs.readFileSync("./src/data/plane_identifiers.json");
  let planes = JSON.parse(rawdata);
  let planes_sorted = sortObj(JSON.parse(rawdata));

  // Check if current plane_identifiers.json is sorted correctly.
  if (JSON.stringify(planes) === JSON.stringify(planes_sorted)) {
    console.log("plane_identifiers.json is sorted correctly.");
    return;
  }
  core.setFailed(
    "plane_identifiers.json is not sorted correctly. Please run 'npm run sort_plane_identifiers' and try again."
  );
};

main();
