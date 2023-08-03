import { createHTMLElem } from '../../../helpers/createHTMLElem.js';
import { addNote } from '../addNote.js';

export function createAddNote(parent$) {
	const addNote$ = createHTMLElem(parent$, 'div', { class: 'add-note' });

	const addNoteButton$ = createHTMLElem(addNote$, 'button', { class: 'add-note__button' }, '➕ Add note');
	addNoteButton$.addEventListener('click', addNote);

	return parent$;
}
