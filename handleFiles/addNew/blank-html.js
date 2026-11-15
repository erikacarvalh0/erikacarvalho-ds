import fs from "fs";
import yargs from "yargs"

import { srcPath } from "../../constants/templates.js";
import { componentStructure } from "../../templates/html.js";

const argv = yargs(process.argv.slice(2)).argv

const name =  argv.n  || argv.name

const templateStructure = componentStructure(name)

fs.mkdirSync(`components/${name}`)
fs.writeFileSync(`components/${name}/index.html`, templateStructure, "utf8")
fs.writeFileSync(`components/${name}/index.scss`, '', "utf8")