import fs from "fs";

import { placeholder, srcPath } from "../../constants/templates.js";
import { app, componentStructure } from "../../templates/vue.js";

import { getDirectories } from "../../utils/getDirectories.js";
import { getOriginalHTML } from "../../utils/getOriginalHTML.js";
import { camelCapitalized } from "../../utils/camelCapitalized.js";

if (!fs.existsSync(srcPath)){
	console.log(`[ADD NEW] Vue - Make ${srcPath} folder`)
	fs.mkdirSync(srcPath)
}

const components = getDirectories('../../components')

let allComponentsTags = ''

components.map(component => {
	let componentContent = ''
	let capitalizedContent = ''

	fs.readFile(`../../components/${component}/index.html`, 'utf8', function(err, htmlFull){
		const { componentTag, html } = getOriginalHTML(htmlFull)
		processFile(html, componentTag)
	})

	const processFile = (content, tag) => {
		componentContent = content
		capitalizedContent = content.replaceAll(tag, camelCapitalized(component))
	}
	setTimeout(() => {
		//SET COMPONENTS TO BE CALLED ON APP.VUE
		allComponentsTags = `${allComponentsTags} ${capitalizedContent}`
	}, 10)

	if (!fs.existsSync(`${srcPath}${component}`)){
		setTimeout(() => {
			const templateStructure = componentStructure(component, componentContent)
			fs.mkdirSync(`${srcPath}${component}`)
			fs.writeFileSync(`./${srcPath}${component}/index.vue`, templateStructure, "utf8")
		}, 20)
	}
})

// SET APP.VUE CONTENT
setTimeout(() => {
	const appStructure = app(components).replace(placeholder, allComponentsTags)
	fs.writeFileSync(`src/App.vue`, appStructure, "utf8")
}, 100)

	