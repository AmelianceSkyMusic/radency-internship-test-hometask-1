import { store } from '../../store/store.js';
import { createDialog } from './elements/dialog/createDialog.js';

export function addNote() {
	createDialog('ADD NOTE', '', '', '', (data) => {
		const { name, category, content } = data;
		store.data.addNote(name, category, content);
	});
}
