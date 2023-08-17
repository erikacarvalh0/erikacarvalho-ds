import { capitalize } from "./capitalize.js"
import { snakeToCamel } from "./snakeToCamel.js"

export const camelCapitalized = (str) => capitalize(snakeToCamel(str))