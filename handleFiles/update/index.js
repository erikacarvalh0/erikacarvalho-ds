import fs from 'fs'

import { getDirectories } from "../../utils/getDirectories.js";
import { srcPath } from '../../constants/templates.js';

export const updateTagStyle = (framework) => {

	const styleRegex = {
		vue: /<style lang="sass">([\s\S]*?)<\/style>/,
		svelte: /<style lang="scss">([\s\S]*?)<\/style>/,
	}

	const styleAttr = {
		vue: 'lang="sass"',
		svelte: 'lang="scss"',
	}

	const components = getDirectories('../../components')
	const componentsToUpdate = "all" // TODO: set specific component to update when starting process

	components.map(component => {

		if (framework === "react") {
			if (componentsToUpdate === "all") {
				const css = fs.readFileSync(`../../components/${component}/index.css`, "utf8")
				fs.writeFileSync(`./${srcPath}${component}/raw/index.css`, css, "utf8")
			}
		} else {
			if (componentsToUpdate === "all") {
				const componentPath = `./${srcPath}${component}/index.${framework}`
				const componentFile = fs.readFileSync(componentPath, 'utf8');
				const css = fs.readFileSync(`../../components/${component}/index.css`, "utf8");
	
				const withSynchronizedStyles = componentFile.replace(styleRegex[framework], `<style ${styleAttr[framework]}>\n${css}\n</style>`)
	
				fs.writeFileSync(componentPath, withSynchronizedStyles, "utf8");
			}
		}
		
		console.log(`[UPDATE] ${framework} - ${component} component updated!`)
	})
}