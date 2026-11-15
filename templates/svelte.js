import fs from "fs"

import { camelCapitalized } from "../utils/camelCapitalized.js"

export const componentStructure = (component, rawComponentContent) => {
	const css = fs.readFileSync(`../../components/${component}/index.scss`, "utf8");

	return `${ rawComponentContent }

	<script>
	</script>

	<style lang="scss">
		${css}
	</style>`
}

export const app = (components) => {

	const allComponentsImports = components.reduce((imports, component) => `${imports}
import ${camelCapitalized(component)} from "./components/${component}/index.svelte";`, ``)
	const allComponentsCalls = components.reduce((calls, component) => `${calls}
				<${camelCapitalized(component)} />`, ``)

	return `<script>
		${allComponentsImports}
	</script>
	<main>
		${allComponentsCalls}
	</main>`
}
