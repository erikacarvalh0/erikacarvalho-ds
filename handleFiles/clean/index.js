import fs from 'fs'

import { getDirectories } from "../../utils/getDirectories.js";
import { srcPath } from '../../constants/templates.js';

export const clean = (framework) => {
	const components = getDirectories('../../components')
	const componentsFramework = getDirectories(srcPath)

	const componentsToRemove = componentsFramework.filter(component => !components.includes(component))

	componentsToRemove.forEach(component => {
		fs.rmSync(`${srcPath}${component}`, { recursive: true, force: true });
		console.log(`[CLEAN] ${component} component removed!`)
	})
}