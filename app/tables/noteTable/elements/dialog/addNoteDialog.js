import { store } from '../../../../store/store.js';
import { createDialog } from './createDialog.js';

export function addNoteDialog() {
	createDialog('ADD NOTE', '', '', '', (data) => {
		const { name, category, content } = data;
		store.data.addNote(name, category, content);
	});
}
