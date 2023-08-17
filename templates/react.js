import fs from "fs"
import fse from 'fs-extra'

import { camelCapitalized } from "../utils/camelCapitalized.js"
import { srcPath } from "../constants/templates.js"

export const componentStructure = (component, content) => {
	return `import "./raw/index.scss";

	const ${camelCapitalized(component)} = () => {
		return ${content};
	};

	export default ${camelCapitalized(component)};`

}

// export const style = (componentClasses) => {
// 	if (typeof componentClasses === 'object') {
// 		return componentClasses.reduce((all, className) => {
// 			return `${all}
// .${className} {
// 	composes: ${className} from './raw/index.css';
// }`
// 		}, '')
// 	}

// 	return `.${componentClasses} {
// 		composes: ${componentClasses} from './raw/index.css';
// 	}`
// }

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

	fs.mkdirSync(`${srcPath}${component}/raw`)
	fse.copySync(`../../components/${component}/index.scss`, `${srcPath}${component}/raw/index.scss`, { overwrite: false })

}

export const createComponent = (component, componentContent) => {
	const templateStructure = componentStructure(component, componentContent)

	fs.mkdirSync(`${srcPath}${component}`)
	fs.writeFileSync(`./${srcPath}${component}/index.tsx`, templateStructure, "utf8")
}
