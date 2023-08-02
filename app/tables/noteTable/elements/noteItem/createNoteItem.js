import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';

export function createNoteItem(parent$, createNoteItemButtons, note, data) {
	const noteItem$ = createHTMLElem(parent$, 'div', { class: 'note-item' });

	createHTMLElem(noteItem$, 'p', { class: 'note-item__created' }, note.created);
	createHTMLElem(noteItem$, 'p', { class: 'note-item__category' }, note.category);
	createHTMLElem(noteItem$, 'p', { class: 'note-item__content' }, note.content);
	createHTMLElem(noteItem$, 'p', { class: 'note-item__dates' }, note.dates);

	const noteItemButtons$ = createHTMLElem(noteItem$, 'div', { class: 'note-item__buttons note-item-buttons' });
	createNoteItemButtons(noteItemButtons$, note.id);

	return parent$;
}
