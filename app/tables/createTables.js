import { createNoteTable } from './noteTable/createNoteTable.js';
import { createSummaryTable } from './summaryTable/createSummaryTable.js';

export function createTables(data) {
	if (data.activeTab === 'notes') createNoteTable(data.notesList, data.activeTab);
	if (data.activeTab !== 'notes') createNoteTable(data.archivedNotesList, data.activeTab);
	createSummaryTable(data);
}
