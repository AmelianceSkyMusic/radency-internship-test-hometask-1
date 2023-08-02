import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';

export function createAddNote(parent$) {
	const addNote$ = createHTMLElem(parent$, 'div', { class: 'add-note' });

	const addNoteButton$ = createHTMLElem(addNote$, 'button', { class: 'add-note__button' }, '➕ Add note');
	addNoteButton$.addEventListener('click', () => {
	});

	return parent$;
}
