import { getHTMLParts } from "./getHTMLParts.js"

export const getOriginalHTML = (html) => {
	const { componentStart, endIndex, componentTag, isOnlyChild } = getHTMLParts(html) 

	const endLength = isOnlyChild
		? endIndex + ` />`.length
		: endIndex + `</${componentTag}>`.length
	return {
		componentStart, endIndex, componentTag,
		html: componentStart.slice(0, endLength)
	}
}

