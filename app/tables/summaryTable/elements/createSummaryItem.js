import { createHTMLElem } from '../../../helpers/createHTMLElem.js';

export function createSummaryItem(parent$, category, active, archived) {
	const summaryItem$ = createHTMLElem(parent$, 'div', { class: 'summary-item' });

	createHTMLElem(summaryItem$, 'p', { class: 'summary-item__category' }, category);
	createHTMLElem(summaryItem$, 'p', { class: 'summary-item__active' }, active);
	createHTMLElem(summaryItem$, 'p', { class: 'summary-item__archived' }, archived);

	return parent$;
}
