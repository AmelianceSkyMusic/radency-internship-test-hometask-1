import { returnError } from './returnError.js';

export function getFormattedDate(dateString, format = 'en-US') {
	try {
		return new Intl.DateTimeFormat(format, { dateStyle: 'long' }).format(new Date(dateString));
	} catch (error) {
		returnError(error);
	}
}
