import fs from "fs";

import { JSDOM } from "jsdom"
import { srcPath } from "../../constants/templates.js";
import {app, createComponent, createStyle} from "../../templates/react.js"

import { getDirectories } from "../../utils/getDirectories.js";
import { classRegex } from "../../utils/regex.js";

if (!fs.existsSync(srcPath)){
	console.log(`[ADD NEW] React - Make ${srcPath} folder`)
	fs.mkdirSync(srcPath)
}

const components = getDirectories('../../components')
let msToCreate = 20

components.map(component => {
	if (!fs.existsSync(`${srcPath}${component}`)){

		fs.readFile(`../../components/${component}/index.html`, 'utf8', function(err, html){
			
			const dom = new JSDOM(html)
			const componentHtml = dom.window.document.querySelector('[data-component]').outerHTML
				.replaceAll(/(<img\s+.*?)>/g, "$1 />")
				.replaceAll("class=", "className=")

			msToCreate += 1

			// GUARANTEE THAT THE HTML WAS COPIED BEFORE CREATING THE FILES
			setTimeout(() => {
				createComponent(component, componentHtml)
				createStyle(component)
			}, msToCreate)
		})
	}
})

setTimeout(() => {
	const appStructure = app(components)
	fs.writeFileSync(`src/App.tsx`, appStructure, "utf8")
}, msToCreate + 100)
