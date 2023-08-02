import { createNoteTable } from './noteTable/createNoteTable.js';
import { createSummaryTable } from './summaryTable/createSummaryTable.js';

export function createTables(data) {
	createNoteTable(data);
	createSummaryTable(data);
}
