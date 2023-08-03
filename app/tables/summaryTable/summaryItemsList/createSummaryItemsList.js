import { CATEGORIES } from '../../../constants/CATEGORIES.js';
import { CATEGORY_ICON } from '../../../constants/CATEGORY_ICON.js';
import { createHTMLElem } from '../../../helpers/createHTMLElem.js';
import { createSummaryItem } from '../elements/createSummaryItem.js';
import { getCategoriesFromData } from './helpers/getCategoriesFromData.js';

export function createSummaryItemsList(parent$, data) {
	const summaryList$ = createHTMLElem(parent$, 'div', { class: 'summary-items-list' });

	const categories = getCategoriesFromData(data);

	Object.entries(categories)
		.sort()
		.forEach((summaryCategory) => {
			const { active, archived } = summaryCategory[1];
			const icon = CATEGORY_ICON[summaryCategory[0]];
			const category = CATEGORIES[summaryCategory[0]];
			createSummaryItem(summaryList$, icon, category, active.toString(), archived.toString());
		});

	return summaryList$;
}
