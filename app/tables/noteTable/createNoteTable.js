import { appendInitBlock } from '../../helpers/appendInitBlock.js';
import { createAddNote } from './elements/noteItem/createAddNote.js';
import { createArchivedNoteHeadingItemButtons } from './elements/headingItem/createArchivedNoteHeadingItemButtons.js';
import { createHeadingItem } from './elements/headingItem/createHeadingItem.js';
import { createHeadingItemButtons } from './elements/headingItem/createHeadingItemButtons.js';
import { createInitBlockHTMLElem } from '../../helpers/createInitBlockHTMLElem.js';
import { createNoteItemsList } from './noteItemsList/createNoteItemsList.js';

export function createNoteTable(data) {
	const noteList = data.activeTab === 'notes' ? data.notesList : data.archivedNotesList;

	const [initBlock$, existsBlock$] = createInitBlockHTMLElem('section', { id: 'note-table', class: 'note-table' });

	const buttonCreateCallback = data.activeTab === 'notes' ? createHeadingItemButtons : createArchivedNoteHeadingItemButtons;
	createHeadingItem(initBlock$, buttonCreateCallback, 'Created', 'Category', 'Content', 'Dates');

	createNoteItemsList(initBlock$, noteList, data);
	if (data.activeTab === 'notes') createAddNote(initBlock$);

	appendInitBlock('main', initBlock$, existsBlock$);
}
