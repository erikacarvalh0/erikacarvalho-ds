import { JSDOM } from "jsdom"

export const getOriginalHTML = (html) => { 
	const dom = new JSDOM(html)

	const component = dom.window.document.querySelector('[data-component]').outerHTML

	console.log('++++++++++++++++++++++++++')
	console.log('component', component)

	return component
}

