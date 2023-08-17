import fs from "fs";
import fse from 'fs-extra'

import { getDirectories } from "../../utils/getDirectories.js";

const generateLinksToComponents = () => {
	const components = getDirectories('./components')
	
	const allLinks = components.reduce((all, component) => {
		return `${all}
		<li>
			<a href="../components/${component}/index.html">${component}</a>
		</li>`
	}, '')
	
	const appFile = fs.readFileSync(`app/index.html`, 'utf8');
	const withSynchronizedComponents = appFile.replace(/<ul data-links>([\s\S]*?)<\/ul>/, `<ul data-links>\n${allLinks}\n</ul>`)
	
	fs.writeFileSync(`app/index.html`, withSynchronizedComponents, "utf8")
}

const copyComponentsFolder = () => {
	const srcDir = `./components/`;
	const destDir = `./app/components/`;
																	
	try {
		fse.copySync(srcDir, destDir, { overwrite: true })
		console.log('[COPY] HTML - Components folder was copied!')
	} catch (err) {
		console.error(err)
	}
}

copyComponentsFolder()
generateLinksToComponents()