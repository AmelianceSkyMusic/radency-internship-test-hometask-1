import { appendInitBlock } from '../../helpers/appendInitBlock.js';
import { createInitBlockHTMLElem } from '../../helpers/createInitBlockHTMLElem.js';
import { createSummaryHeading } from './elements/createSummaryHeading.js';
import { createSummaryItemsList } from './summaryItemsList/createSummaryItemsList.js';

export function createSummaryTable(data) {
	const [initBlock$, existsBlock$] = createInitBlockHTMLElem('section', { id: 'summary-table', class: 'summary-table' });

	createSummaryHeading(initBlock$, 'Note Category', 'Active', 'Archived');
	createSummaryItemsList(initBlock$, data);

	appendInitBlock('main', initBlock$, existsBlock$);
}
