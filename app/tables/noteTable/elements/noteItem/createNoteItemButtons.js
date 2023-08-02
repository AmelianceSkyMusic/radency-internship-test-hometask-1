import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';
import { store } from '../../../../store/store.js';

export function createNoteItemButtons(parent$, id) {
	const edit$ = createHTMLElem(parent$, 'button', { class: 'note-item-button' }, '✏️');
	edit$.addEventListener('click', () => {
		store.data.editNote(id);
	});

	const toArchive$ = createHTMLElem(parent$, 'button', { class: 'note-item-button' }, '⬇️');
	toArchive$.addEventListener('click', () => {
		store.data.moveNoteToArchive(id);
	});

	const delete$ = createHTMLElem(parent$, 'button', { class: 'note-item-button' }, '🗑️');
	delete$.addEventListener('click', () => {
		store.data.removeNoteFromNotesList(id);
	});
}
