import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';

export function createHeadingItem(parent$, createButtons, createdTitle, categoryTitle, contentTitle, datesTitle) {
	const noteHeading$ = createHTMLElem(parent$, 'div', { class: 'note-heading' });

	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading__created' }, createdTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading__category' }, categoryTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading__content' }, contentTitle);
	createHTMLElem(noteHeading$, 'h5', { class: 'note-heading__dates' }, datesTitle);

	const noteHeadingButtons$ = createHTMLElem(noteHeading$, 'div', { class: 'note-heading__buttons note-heading-buttons' });
	createButtons(noteHeadingButtons$);

	return parent$;
}
