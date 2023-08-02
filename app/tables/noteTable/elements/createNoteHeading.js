import { createHTMLElem } from '../../../helpers/createHTMLElem.js';

export function createNoteHeading(parent$, createdTitle, categoryTitle, contentTitle, datesTitle) {
	const noteHeading$ = createHTMLElem(parent$, 'div', { class: 'note-heading' });

	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading__created' }, createdTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading__category' }, categoryTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading__content' }, contentTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading__dates' }, datesTitle);

	const noteHeadingButtons$ = createHTMLElem(noteHeading$, 'div', { class: 'note-heading__buttons note-heading-buttons' });

	const toArchive$ = createHTMLElem(noteHeadingButtons$, 'button', { class: 'note-heading-buttons__to-archive note-heading-button' }, '📥');
	toArchive$.addEventListener('click', () => {
	});

	const delete$ = createHTMLElem(noteHeadingButtons$, 'button', { class: 'note-heading-buttons__delete note-heading-button' }, '🗑️');
	delete$.addEventListener('click', () => {
	});

	return parent$;
}
