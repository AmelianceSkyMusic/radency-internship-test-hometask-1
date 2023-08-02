import { createArchivedNoteItemButtons } from '../elements/noteItem/createArchivedNoteItemButtons.js';
import { createHTMLElem } from '../../../helpers/createHTMLElem.js';
import { createNoteItem } from '../elements/noteItem/createNoteItem.js';
import { createNoteItemButtons } from '../elements/noteItem/createNoteItemButtons.js';

export function createNoteItemsList(parent$, list, data) {
	const noteList$ = createHTMLElem(parent$, 'div', { class: 'note-items-list' });

	const buttonCreateCallback = data.activeTab === 'notes' ? createNoteItemButtons : createArchivedNoteItemButtons;
	list.forEach((note) => {
		createNoteItem(noteList$, buttonCreateCallback, note, data);
	});

	return noteList$;
}
