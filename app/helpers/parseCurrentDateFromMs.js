import { returnError } from './returnError.js';

export function parseCurrentDateFromMs(ms) {
	try {
		return new Date(Number(ms));
	} catch (error) {
		returnError(error);
	}
}
