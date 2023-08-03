import { returnError } from './returnError.js';

export function sortArrayOfObj(array, key, type = 'num') {
	try {
		const arrayCopy = array.slice();
		if (key) {
			arrayCopy.sort((a, b) => {
				if (type === 'num') {
					if (+a[key] < +b[key]) return -1;
					if (+a[key] > +b[key]) return 1;
				} else {
					if (a[key] < b[key]) return -1;
					if (a[key] > b[key]) return 1;
				}
				return 0;
			});
		}
		return arrayCopy;
	} catch (error) {
		returnError(error);
	}
}
