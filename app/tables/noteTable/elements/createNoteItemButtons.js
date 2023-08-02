import { createHTMLElem } from '../../../helpers/createHTMLElem.js';

export function createNoteItemButtons(parent$, id) {
	const edit$ = createHTMLElem(parent$, 'button', { class: 'note-item-buttons__edit note-item-button' }, '✏️');
	edit$.addEventListener('click', () => {
	});

	const toArchive$ = createHTMLElem(parent$, 'button', { class: 'note-item-buttons__to-archive note-item-button' }, '⬇️');
	toArchive$.addEventListener('click', () => {
	});

	const delete$ = createHTMLElem(parent$, 'button', { class: 'note-item-buttons__delete note-item-button' }, '🗑️');
	delete$.addEventListener('click', () => {
	});
}
