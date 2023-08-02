import { observable } from './observable.js';

const notesList = [
	{
		id: 1,
		created: '',
		category: '✅ Task',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 2,
		name: 'Random Thought',
		created: '',
		category: '💭 Random Thought',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 3,
		created: '',
		category: '💡 Idea',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 4,
		created: '',
		category: '✅ Task',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 5,
		created: '',
		category: '💡 Idea',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 6,
		created: '',
		category: '✅ Task',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 7,
		created: '',
		category: '✅ Task',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 1,
		created: '',
		category: '✅ Task',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 2,
		name: 'Random Thought',
		created: '',
		category: '💭 Random Thought',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 3,
		created: '',
		category: '💡 Idea',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 4,
		created: '',
		category: '✅ Task',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 5,
		created: '',
		category: '💡 Idea',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 6,
		created: '',
		category: '✅ Task',
		content: 'content',
		dates: '',
		isArchived: false,
	},
	{
		id: 7,
		created: '',
		category: '✅ Task',
		content: 'content',
		dates: '',
		isArchived: false,
	},
];

const archivedNotesList = [
	{
		id: 8,
		created: '',
		category: '✅ Task',
		content: 'vxcvb',
		dates: '',
		isArchived: false,
	},
	{
		id: 9,
		created: '',
		category: '✅ Task',
		content: 'xcvbxvbxcvb',
		dates: '',
		isArchived: false,
	},
	{
		id: 10,
		created: '',
		category: '💡 Idea',
		content: 'content',
		dates: '',
		isArchived: false,
	},
];

export const store = observable({
	notesList,
	archivedNotesList,
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
		store.update({ ...store.data, notesList: [], archivedNotesList: [...archivedNotesList, ...notesList] });
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
		store.update({ ...store.data, notesList: [...notesList, ...archivedNotesList], archivedNotesList: [] });
	},
	removeAllArchivedNotesList: () => {
		store.update({ ...store.data, archivedNotesList: [] });
	},
});
