import fs from "fs"

import { placeholder } from "../constants/templates.js"
import { camelCapitalized } from "../utils/camelCapitalized.js"
import { classRegex } from "../utils/regex.js"

export const app = (components) => {
	const allComponentsImports = components.reduce((imports, component) => `${imports}
import ${camelCapitalized(component)} from "./components/${component}/index.vue";`, ``)
	const allComponents = components.reduce((calls, component) => `${calls}
	${camelCapitalized(component)},`, ``)

	return `<template>
		<div id="app">
			${placeholder}
		</div>
	</template>

	<script>
	${allComponentsImports}

	export default {
		name: 'App',
		components: {
			${allComponents}
		}
	}
	</script>`
}

const handleClasses = (classes) => {
	const classesArr = classes.split(' ')
	return classesArr.reduce((all, className) => {
		return `${all}
		[this.$style.${className}]: true,`
	}, '')
}

export const componentStructure = (component, rawComponentContent) => {
	const [, classes] = rawComponentContent.match(classRegex)
	const componentContent = rawComponentContent.replace(classRegex, `:class="classes"`)
	const allClasses = handleClasses(classes)

	const css = fs.readFileSync(`../../components/${component}/index.scss`, "utf8")
		.replace(/[;{}]/g, '')
		.replaceAll(`  `, `			`);

	return `<template>
		${ componentContent }
		</template>

	<script>
	export default {
		name: '${camelCapitalized(component)}',
		computed: {
		}
	}
	</script>

	<style lang="sass">
		${css}
	</style>`
}