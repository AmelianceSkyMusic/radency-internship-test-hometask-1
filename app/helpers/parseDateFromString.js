import { returnError } from './returnError.js';

export function parseDateFromString(string) {
	try {
		const datePattern = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g;
		const dates = string.match(datePattern);
		return dates;
	} catch (error) {
		returnError(error);
	}
}
