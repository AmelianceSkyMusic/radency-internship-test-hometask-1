import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';
import { store } from '../../../../store/store.js';

export function createArchivedNoteHeadingItemButtons(parent$) {
	const toArchive$ = createHTMLElem(parent$, 'button', { class: 'note-heading-button' }, '⬆️');
	toArchive$.addEventListener('click', () => {
		store.data.moveAllNoteFromArchive();
	});

	const removeAll$ = createHTMLElem(parent$, 'button', { class: 'note-heading-button' }, '🗑️');
	removeAll$.addEventListener('click', () => {
		store.data.removeAllArchivedNotesList();
	});
}
