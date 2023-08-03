import { getCurrentDateInMs } from '../helpers/getCurrentDateInMs.js';
import { initArchivedNotesList } from './initData/initArchivedNotesList.js';
import { initNotesList } from './initData/initNotesList.js';
import { observable } from './observable.js';

export const store = observable({
	notesList: initNotesList,
	archivedNotesList: initArchivedNotesList,
	activeTab: 'notes',

	moveNoteToArchive: (id) => {
		const newArchivedNotesList = [...store.data.archivedNotesList];
		const newNotesList = store.data.notesList.filter((note) => {
			if (note.id !== id) return true;
			newArchivedNotesList.push(note);
		});
		store.update({ ...store.data, notesList: newNotesList, archivedNotesList: newArchivedNotesList });
	},
	removeNoteFromNotesList: (id) => {
		const newNotesList = store.data.notesList.filter((note) => note.id !== id);
		store.update({ ...store.data, notesList: newNotesList });
	},
	moveAllNoteToArchive: () => {
		store.update({ ...store.data, notesList: [], archivedNotesList: [...store.data.archivedNotesList, ...store.data.notesList] });
	},
	removeAllNotesList: () => {
		store.update({ ...store.data, notesList: [] });
	},

	moveNoteFromArchive: (id) => {
		const newNotesList = [...store.data.notesList];
		const newArchivedNotesList = store.data.archivedNotesList.filter((note) => {
			if (note.id !== id) return true;
			newNotesList.push(note);
		});
		store.update({ ...store.data, archivedNotesList: newArchivedNotesList, notesList: newNotesList });
	},
	removeNoteFromArchivedList: (id) => {
		const newArchivedNotesList = store.data.archivedNotesList.filter((note) => note.id !== id);
		store.update({ ...store.data, archivedNotesList: newArchivedNotesList });
	},
	moveAllNoteFromArchive: () => {
		store.update({ ...store.data, notesList: [...store.data.notesList, ...store.data.archivedNotesList], archivedNotesList: [] });
	},
	removeAllArchivedNotesList: () => {
		store.update({ ...store.data, archivedNotesList: [] });
	},
});
