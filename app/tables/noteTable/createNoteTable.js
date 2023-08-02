import { appendInitBlock } from '../../helpers/appendInitBlock.js';
import { createAddNote } from './elements/createAddNote.js';
import { createInitBlockHTMLElem } from '../../helpers/createInitBlockHTMLElem.js';
import { createNoteHeading } from './elements/createNoteHeading.js';
import { createNoteItemsList } from './noteItemsList/createNoteItemsList.js';

export function createNoteTable(list, activeTab) {
	const [initBlock$, existsBlock$] = createInitBlockHTMLElem('section', { id: 'note-table', class: 'note-table' });

	createNoteHeading(initBlock$, 'Created', 'Category', 'Content', 'Dates');

	createNoteItemsList(initBlock$, list, activeTab);
	if (activeTab === 'notes') createAddNote(initBlock$);

	appendInitBlock('main', initBlock$, existsBlock$);
}
