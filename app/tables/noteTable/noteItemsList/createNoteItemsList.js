import { createArchivedNoteItemButtons } from '../elements/noteItem/createArchivedNoteItemButtons.js';
import { createHTMLElem } from '../../../helpers/createHTMLElem.js';
import { createNoteItem } from '../elements/noteItem/createNoteItem.js';
import { createNoteItemButtons } from '../elements/noteItem/createNoteItemButtons.js';
import { CATEGORY_ICON } from '../../../constants/CATEGORY_ICON.js';
import { CATEGORIES } from '../../../constants/CATEGORIES.js';
import { getFormattedDate } from '../../../helpers/getFormattedDate.js';
import { parseDateFromString } from '../../../helpers/parseDateFromString.js';
import { sortArrayOfObj } from '../../../helpers/sortArrayOfObj.js';

export function createNoteItemsList(parent$, list, data) {
	const noteList$ = createHTMLElem(parent$, 'div', { class: 'note-items-list' });

	const buttonCreateCallback = data.activeTab === 'notes' ? createNoteItemButtons : createArchivedNoteItemButtons;
	const sortedList = sortArrayOfObj(list, 'created');
	sortedList.sort().forEach((note) => {
		const icon = CATEGORY_ICON[note.category];
		const category = CATEGORIES[note.category];
		const { id, name, created: createdMs, content } = note;
		const created = getFormattedDate(createdMs);
		const dates = parseDateFromString(content)?.join(', ');
		createNoteItem(noteList$, buttonCreateCallback, id, icon, name, created, category, content, dates);
	});

	return noteList$;
}
