import { createHTMLElem } from '../../../helpers/createHTMLElem.js';
import { addNoteDialog } from './dialog/addNoteDialog.js';

export function createAddNote(parent$) {
	const addNote$ = createHTMLElem(parent$, 'div', { class: 'add-note' });

	const addNoteButton$ = createHTMLElem(addNote$, 'button', { class: 'add-note__button' }, '➕ Add note');
	addNoteButton$.addEventListener('click', addNoteDialog);

	return parent$;
}
