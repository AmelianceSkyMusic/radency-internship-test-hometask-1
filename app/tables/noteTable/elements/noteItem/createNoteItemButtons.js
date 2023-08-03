import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';
import { store } from '../../../../store/store.js';
import { createDialog } from '../dialog/createDialog.js';

export function createNoteItemButtons(parent$, id, name, category, content) {
	const edit$ = createHTMLElem(parent$, 'button', { class: 'note-item-button' }, '✏️');
	edit$.addEventListener('click', () => {
		createDialog('EDIT NOTE', name, category, content, (data) => {
			const { name, category, content } = data;
			store.data.editNote(id, name, category, content);
		});
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
