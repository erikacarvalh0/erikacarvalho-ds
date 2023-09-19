import fs from "fs"
import fse from 'fs-extra'

export const componentStructure = (name) => {
	return `<!doctype html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Erika Carvalho DS - ${name}</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="./index.scss">
	</head>
	<body>
		<main>
			<div data-component class="${name}">
			</div>
		</main>
	</body>
	</html>`
}

export const goBack = () => `<a class="go-back" href="/">
<svg class="icon" viewbox="0 0 20 10" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.502 3.5c5.185-.471 8.517 1.529 9.998 6-2.895-3.219-6.228-3.886-10-2l.001-.002V10.5l-5-5 5-5v3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
Back to home
</a>`
