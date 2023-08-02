export function getCategoriesFromData(data) {
	const categories = {};

	data?.notesList?.forEach((note) => {
		if (!categories[note.category]) categories[note.category] = {};
		if (categories[note.category]?.active) {
			categories[note.category].active = categories[note.category].active + 1;
		} else {
			categories[note.category].active = 1;
		}
	});

	data?.archivedNotesList?.forEach((note) => {
		if (!categories[note.category]) categories[note.category] = {};
		if (categories[note.category]?.archived) {
			categories[note.category].archived = categories[note.category].archived + 1;
		} else {
			categories[note.category].archived = 1;
		}
	});

	return categories;
}
