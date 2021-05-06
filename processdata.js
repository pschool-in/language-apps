import tamil from "./js/tamil/index.js";
//const tamil = require("./tamil/index");
import fs from "fs";
//const fs = require("fs");

function process() {
  fs.writeFileSync("./js/tamil/data.json", JSON.stringify(tamil));
}

process();
