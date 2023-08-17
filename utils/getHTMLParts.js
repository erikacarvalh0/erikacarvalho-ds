export const getHTMLParts = html => {
	// GET BEGGINNING OF COMPONENT
	const componentStartRegex = /[^\S\r\n]\s+[^\S\r\n](<[\w\s&+,:;=?@#|'<>.^*()%!-'"]+data-component)/
	const startIndex = componentStartRegex.exec(html)?.index || 0
	const componentStart = html.slice(startIndex)

	// GET END OF COMPONENT
	const componentTag = componentStart.match(/<([\w&+,:;=?@#|'.^*()%!-'"]+)/)[1]
	const componentEndRegex = new RegExp( `</${componentTag}>`)
	const endIndexWithTag = componentEndRegex.exec(componentStart)?.index
	const endIndexOnlyChild = /\s\/>/.exec(componentStart)?.index
	const endIndex = endIndexWithTag ? endIndexWithTag : endIndexOnlyChild


	if (!endIndex) {
		throw new Error(`The component ${componentTag} must have a [data-component] attribute. Please, check your html.`)
	}

	return {
		componentStart,
		endIndex,
		componentTag,
		isOnlyChild: !!endIndexOnlyChild
	}
}