import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';

export function createNoteItem(parent$, createNoteItemButtons, id, icon, name, created, category, content, dates) {
	const noteItem$ = createHTMLElem(parent$, 'div', { class: 'note-item' });

	createHTMLElem(noteItem$, 'p', { class: 'note-item-cell note-item__icon' }, icon);
	createHTMLElem(noteItem$, 'p', { class: 'note-item-cell note-item__name' }, name);
	createHTMLElem(noteItem$, 'p', { class: 'note-item-cell note-item__created' }, created);
	createHTMLElem(noteItem$, 'p', { class: 'note-item-cell note-item__category' }, category);
	createHTMLElem(noteItem$, 'p', { class: 'note-item-cell note-item__content' }, content);
	createHTMLElem(noteItem$, 'p', { class: 'note-item-cell note-item__dates' }, dates);

	const noteItemButtons$ = createHTMLElem(noteItem$, 'div', { class: 'note-item__buttons note-item-buttons' });
	createNoteItemButtons(noteItemButtons$, id, name, category, content);

	return parent$;
}
