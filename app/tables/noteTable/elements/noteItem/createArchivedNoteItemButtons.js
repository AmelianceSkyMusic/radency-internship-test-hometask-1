import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';
import { store } from '../../../../store/store.js';

export function createArchivedNoteItemButtons(parent$, id) {
	const toArchive$ = createHTMLElem(parent$, 'button', { class: 'note-item-button' }, '⬆️');
	toArchive$.addEventListener('click', () => {
		store.data.moveNoteFromArchive(id);
	});

	const delete$ = createHTMLElem(parent$, 'button', { class: 'note-item-button' }, '🗑️');
	delete$.addEventListener('click', () => {
		store.data.removeNoteFromArchivedList(id);
	});
}
