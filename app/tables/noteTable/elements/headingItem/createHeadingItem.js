import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';

export function createHeadingItem(parent$, createButtons, nameTitle, createdTitle, categoryTitle, contentTitle, datesTitle) {
	const noteHeading$ = createHTMLElem(parent$, 'div', { class: 'note-heading' });

	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading-cell note-heading__icon' });
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading-cell note-heading__name' }, nameTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading-cell note-heading__created' }, createdTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading-cell note-heading__category' }, categoryTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading-cell note-heading__content' }, contentTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading-cell note-heading__dates' }, datesTitle);

	const noteHeadingButtons$ = createHTMLElem(noteHeading$, 'div', { class: 'note-heading__buttons note-heading-buttons' });
	createButtons(noteHeadingButtons$);

	return parent$;
}
