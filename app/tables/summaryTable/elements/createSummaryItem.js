import { createHTMLElem } from '../../../helpers/createHTMLElem.js';

export function createSummaryItem(parent$, icon, category, active, archived) {
	const summaryItem$ = createHTMLElem(parent$, 'div', { class: 'summary-item' });

	createHTMLElem(summaryItem$, 'p', { class: 'summary-item-cell summary-item__icon' }, icon);
	createHTMLElem(summaryItem$, 'p', { class: 'summary-item-cell summary-item__category' }, category);
	createHTMLElem(summaryItem$, 'p', { class: 'summary-item-cell summary-item__active' }, active);
	createHTMLElem(summaryItem$, 'p', { class: 'summary-item-cell summary-item__archived' }, archived);

	return parent$;
}
