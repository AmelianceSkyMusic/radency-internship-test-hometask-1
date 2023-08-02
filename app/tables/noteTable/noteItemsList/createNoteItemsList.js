import { createArchivedNoteItemButtons } from '../elements/createArchivedNoteItemButtons.js';
import { createHTMLElem } from '../../../helpers/createHTMLElem.js';
import { createNoteItem } from '../elements/createNoteItem.js';
import { createNoteItemButtons } from '../elements/createNoteItemButtons.js';

export function createNoteItemsList(parent$, list, activeTab) {
	const noteList$ = createHTMLElem(parent$, 'div', { class: 'note-items-list' });

	const buttonCreateCallback = activeTab === 'notes' ? createNoteItemButtons : createArchivedNoteItemButtons;
	list.forEach((note) => {
		createNoteItem(noteList$, buttonCreateCallback, note);
	});

	return noteList$;
}
