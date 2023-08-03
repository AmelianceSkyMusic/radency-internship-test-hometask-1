import { returnError } from './returnError.js';

function flatObjectKeysToArray(obj) {
	try {
		const entries = Object.entries(obj);
		if (entries.length > 0) {
			return entries.map((tuple) => (tuple[1] ? tuple[0] : '')).filter((element) => element);
		}
		return [];
	} catch (error) {
		returnError(error);
	}
}

export function join(...args) {
	try {
		return args
			.flat(Infinity)
			.map((element) => {
				if (element && typeof element === 'object') {
					const flatObjectKeysArray = flatObjectKeysToArray(element);
					return flatObjectKeysArray ? flatObjectKeysArray.join(' ') : '';
				}
				return element;
			})
			.filter((element) => element)
			.join(' ')
			.trim();
	} catch (error) {
		returnError(error);
	}
}
