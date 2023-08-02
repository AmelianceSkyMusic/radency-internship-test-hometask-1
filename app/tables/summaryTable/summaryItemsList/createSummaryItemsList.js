import { createHTMLElem } from '../../../helpers/createHTMLElem.js';
import { createSummaryItem } from '../elements/createSummaryItem.js';

export function createSummaryItemsList(parent$, data) {
	console.log('data: ', data);
	const summaryList$ = createHTMLElem(parent$, 'div', { class: 'summary-items-list' });

	const summaryCategories = {};

	data?.notesList?.forEach((note) => {
		if (summaryCategories[note.category]?.active) {
			summaryCategories[note.category].active = summaryCategories[note.category].active + 1;
		} else {
			summaryCategories[note.category] = {};
			summaryCategories[note.category].active = 1;
		}
	});

	data?.archivedNotesList?.forEach((note) => {
		if (summaryCategories[note.category]?.active) {
			summaryCategories[note.category].archived = (summaryCategories[note.category].archived || 0) + 1;
		} else {
			summaryCategories[note.category] = {};
			summaryCategories[note.category].archived = 1;
		}
	});

	Object.entries(summaryCategories)
		.sort()
		.forEach((summaryCategory) => {
			const { active, archived } = summaryCategory[1];
			createSummaryItem(summaryList$, summaryCategory[0], active, archived);
		});

	return summaryList$;
}
