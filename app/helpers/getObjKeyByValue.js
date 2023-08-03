import { returnError } from './returnError.js';

export function getObjKeyByValue(object, value) {
	try {
		return Object.keys(object).find((key) => object[key] === value);
	} catch (error) {
		returnError(error);
	}
}
