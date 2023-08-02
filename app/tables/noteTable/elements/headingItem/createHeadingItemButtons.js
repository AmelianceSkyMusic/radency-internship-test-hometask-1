import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';
import { store } from '../../../../store/store.js';

export function createHeadingItemButtons(parent$) {
	const toArchive$ = createHTMLElem(parent$, 'button', { class: 'note-heading-button' }, '⬇️');
	toArchive$.addEventListener('click', () => {
		store.data.moveAllNoteToArchive();
	});

	const deleteAll$ = createHTMLElem(parent$, 'button', { class: 'note-heading-button' }, '🗑️');
	deleteAll$.addEventListener('click', () => {
		store.data.removeAllNotesList();
	});
}
