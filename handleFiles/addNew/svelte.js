import fs from "fs"

import { getDirectories } from "../../utils/getDirectories.js";
import { getOriginalHTML } from "../../utils/getOriginalHTML.js";
import { camelCapitalized } from "../../utils/camelCapitalized.js";
import { app, componentStructure } from "../../templates/svelte.js";
import { srcPath } from "../../constants/templates.js";

if (!fs.existsSync(srcPath)){
	console.log(`[ADD NEW] Svelte - Make ${srcPath} folder`)
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
		//SET COMPONENTS TO BE CALLED ON APP.SVELTE
		allComponentsTags = `${allComponentsTags} ${capitalizedContent}`
	}, 10)

	if (!fs.existsSync(`${srcPath}${component}`)){
		setTimeout(() => {
			const templateStructure = componentStructure(component, componentContent)
			fs.mkdirSync(`${srcPath}${component}`)
			fs.writeFileSync(`./${srcPath}${component}/index.svelte`, templateStructure, "utf8")
		}, 20)
	}
})

setTimeout(() => {
	const appStructure = app(components)
	fs.writeFileSync(`src/App.svelte`, appStructure, "utf8")
}, 100)