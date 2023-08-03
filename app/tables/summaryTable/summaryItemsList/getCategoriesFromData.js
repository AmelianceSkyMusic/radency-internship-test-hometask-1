import { CATEGORIES } from '../../../constants/CATEGORIES.js';

export function getCategoriesFromData(data) {
	const categories = {};

	Object.keys(CATEGORIES).forEach((category) => {
		if (!categories[category]) categories[category] = {};
		categories[category].active = data.notesList.filter((note) => note.category === category).length;
		categories[category].archived = data.archivedNotesList.filter((note) => note.category === category).length;
	});

	return categories;
}
