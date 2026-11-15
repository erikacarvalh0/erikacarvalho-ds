import fs from "fs";
import fse from 'fs-extra'

import { JSDOM } from "jsdom"

import { getDirectories } from "../../utils/getDirectories.js";
import { goBack } from "../../templates/html.js";

const components = getDirectories('./components')

const generateLinksToComponents = () => {
	
	const allLinks = components.reduce((all, component) => {
		return `${all}
		<li>
			<a href="/components/${component}/index.html">${component}</a>
		</li>`
	}, '')

	const appFile = fs.readFileSync(`app/index.html`, 'utf8');

	let withReplacedComponents = appFile;
	
	components.map(component => {
		const dom = new JSDOM(appFile)
		const componentsToInclude = dom.window.document.querySelectorAll(`[data-include="${component}"]`)
		
		if (!!componentsToInclude.length) {
			const componentFile = fs.readFileSync(`components/${component}/index.html`, 'utf8');
			const componentDom = new JSDOM(componentFile)

			Array.from(componentsToInclude).map(componentToInclude => {
				const componentHtml = componentDom.window.document.querySelector('[data-component]').outerHTML
					.replaceAll(/(<img\s+.*?)>/g, "$1 />")
				
					withReplacedComponents = appFile.replace(componentToInclude.outerHTML, componentHtml)
			})
		}
	})
	const withSynchronizedComponents = withReplacedComponents.replace(/<ul data-links>([\s\S]*?)<\/ul>/, `<ul data-links>\n${allLinks}\n</ul>`)

	
		
	fs.writeFileSync(`app/index.html`, withSynchronizedComponents, "utf8")
}

const copyComponentsFolder = () => {
	const srcDir = `./components/`;
	const destDir = `./app/components/`;
																	
	try {
		fse.copySync(srcDir, destDir, { overwrite: true })
		
		components.map(component => {
			const styleTag = `<link rel="stylesheet" href="../../go-back.scss"/>`
			const componentFile = fs.readFileSync(`${destDir}${component}/index.html`, 'utf8');
			const withGoBack = componentFile.replace(`</body>`, `${goBack()}</body>`).replace('</head>', `${styleTag}</head>`)

			fs.writeFileSync(`${destDir}${component}/index.html`, withGoBack, "utf8")

		})

	} catch (err) {
		console.error(err)
	}
}

copyComponentsFolder()
generateLinksToComponents()