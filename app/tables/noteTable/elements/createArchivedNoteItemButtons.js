import { createHTMLElem } from '../../../helpers/createHTMLElem.js';

export function createArchivedNoteItemButtons(parent$, id) {
	const toArchive$ = createHTMLElem(parent$, 'button', { class: 'note-item-buttons__to-archive note-item-button' }, '⬆️');
	toArchive$.addEventListener('click', () => {
	});
}
