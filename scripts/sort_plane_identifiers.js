/**
 * @file Small script to sort plane_identifiers.json.
 */

import fs from "fs";
import { sortObj } from "./common.js";

/**
 * Main function.
 */
const main = async () => {
  // Read the plane_identifiers.json file.
  const rawdata = fs.readFileSync("./src/data/plane_identifiers.json");
  const planes_sorted = sortObj(JSON.parse(rawdata));

  // Write the sorted plane_identifiers.json file.
  fs.writeFileSync(
    "./src/data/plane_identifiers.json",
    JSON.stringify(planes_sorted, null, 2)
  );
  console.log("plane_identifiers.json sorted.");
};

main();
