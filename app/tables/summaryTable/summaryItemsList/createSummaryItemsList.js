import { createHTMLElem } from '../../../helpers/createHTMLElem.js';
import { createSummaryItem } from '../elements/createSummaryItem.js';
import { getCategoriesFromData } from './getCategoriesFromData.js';

export function createSummaryItemsList(parent$, data) {
	const summaryList$ = createHTMLElem(parent$, 'div', { class: 'summary-items-list' });

	const categories = getCategoriesFromData(data);

	Object.entries(categories)
		.sort()
		.forEach((summaryCategory) => {
			const { active, archived } = summaryCategory[1];
			createSummaryItem(summaryList$, summaryCategory[0], active, archived);
		});

	return summaryList$;
}
