import fs from "fs"

import { camelCapitalized } from "../utils/camelCapitalized.js"
import { srcPath } from "../constants/templates.js"

export const componentStructure = (component, content) => {
	return `import "./raw/index.scss";

	const ${camelCapitalized(component)} = () => {
		return ${content};
	};

	export default ${camelCapitalized(component)};`

}

export const app = (components) => {

	const allComponentsImports = components.reduce((imports, component) => `${imports}
import ${camelCapitalized(component)} from "./components/${component}";`, ``)
	const allComponentsCalls = components.reduce((calls, component) => `${calls}
				<${camelCapitalized(component)} />`, ``)

	return `import "./App.css"; ${allComponentsImports}

	function App() {
		return (
			<div className="App">
				${allComponentsCalls}
			</div>
		);
	}
	
	export default App;`
}


export const createStyle = (component) => {
	if (!fs.existsSync(`${srcPath}${component}/raw`)){
		fs.mkdirSync(`${srcPath}${component}/raw`)
	}

	const css = fs.readFileSync(`../../components/${component}/index.scss`, "utf8")
	fs.writeFileSync(`./${srcPath}${component}/raw/index.scss`, css, "utf8")
}

export const createComponent = (component, componentContent) => {
	const templateStructure = componentStructure(component, componentContent)

	fs.mkdirSync(`${srcPath}${component}`)
	fs.writeFileSync(`./${srcPath}${component}/index.tsx`, templateStructure, "utf8")
}
