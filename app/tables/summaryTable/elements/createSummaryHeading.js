import { createHTMLElem } from '../../../helpers/createHTMLElem.js';

export function createSummaryHeading(parent$, categoryTitle, activeTitle, archivedTitle) {
	const summaryHeading$ = createHTMLElem(parent$, 'div', { class: 'summary-heading' });

	createHTMLElem(summaryHeading$, 'h5', { class: 'summary-heading-cell summary-heading__icon' });
	createHTMLElem(summaryHeading$, 'h5', { class: 'summary-heading-cell summary-heading__category' }, categoryTitle);
	createHTMLElem(summaryHeading$, 'h5', { class: 'summary-heading-cell summary-heading__active' }, activeTitle);
	createHTMLElem(summaryHeading$, 'h5', { class: 'summary-heading-cell summary-heading__archived' }, archivedTitle);

	return parent$;
}
