import fs from "fs";

import { srcPath } from "../../constants/templates.js";
import {app, createComponent, createStyle} from "../../templates/react.js"

import { getOriginalHTML } from "../../utils/getOriginalHTML.js";
import { getDirectories } from "../../utils/getDirectories.js";
import { classRegex } from "../../utils/regex.js";

if (!fs.existsSync(srcPath)){
	console.log(`[ADD NEW] React - Make ${srcPath} folder`)
	fs.mkdirSync(srcPath)
}

const handleClasses = (component) => {
	const [, classes] = classRegex.exec(component)

	if (classes.includes(' ')) {
		const allClasses = classes.split(' ')
		const reactClasses = allClasses.reduce((all, className) => {
			return `${all} ${className}`
		}, '')
		
		return [allClasses, component.replace(classRegex, `className={\`${reactClasses}\`}`)]
	}

	return [classes, component.replace(classRegex, `className="$1"`)]
}

const components = getDirectories('../../components')

components.map(component => {
	if (!fs.existsSync(`${srcPath}${component}`)){

		let componentContent = ''
		let componentClasses = ''

		fs.readFile(`../../components/${component}/index.html`, 'utf8', function(err, html){
			const original = getOriginalHTML(html)
			const [classes, componentHtml] = handleClasses(original.html)
			processFile(classes, componentHtml)
		})

		const processFile = (classes, content) => { 
			componentClasses = classes 
			componentContent = content
		}

		// GUARANTEE THAT THE HTML WAS COPIED BEFORE CREATING THE FILES
		setTimeout(() => {
			createComponent(component, componentContent)
			createStyle(component)
		}, 20)
	}

	// // GENERATE CSS ONLY AFTER THE FOLDER IS CREATED
	// setTimeout(() => {
	// 	if (!fs.existsSync(`${srcPath}${component}/raw`)){
	// 		fs.mkdirSync(`${srcPath}${component}/raw`)
	// 	}
	
	// 	const css = fs.readFileSync(`../../components/${component}/index.scss`, "utf8")
	// 	fs.writeFileSync(`./${srcPath}${component}/raw/index.scss`, css, "utf8")
	// }, 20)

})

setTimeout(() => {
	const appStructure = app(components)
	fs.writeFileSync(`src/App.tsx`, appStructure, "utf8")
}, 100)
