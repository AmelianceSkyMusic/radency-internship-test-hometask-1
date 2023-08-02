import { prependInitBlock } from '../helpers/prependInitBlock.js';
import { createHTMLElem } from '../helpers/createHTMLElem.js';
import { createInitBlockHTMLElem } from '../helpers/createInitBlockHTMLElem.js';
import { join } from '../helpers/join.js';
import { store } from '../store/store.js';

export function createHeader(data) {
	const [initBlock$, existsBlock$] = createInitBlockHTMLElem('header', { id: 'header', class: 'header' });

	const notesClasses = data.activeTab === 'notes' && 'header__tab_active';
	const archivedClasses = data.activeTab !== 'notes' && 'header__tab_active';
	const notesTab$ = createHTMLElem(initBlock$, 'button', { class: join('header__tab header__notes-tab', notesClasses) }, 'Notes');

	notesTab$.addEventListener('click', () => {
		if (data.activeTab === 'archived') store.updateValue('activeTab', 'notes');
	});

	const archivedTab$ = createHTMLElem(initBlock$, 'button', { class: join('header__tab header__archived-tab', archivedClasses) }, 'Archive');
	archivedTab$.addEventListener('click', () => {
		if (data.activeTab === 'notes') store.updateValue('activeTab', 'archived');
	});

	prependInitBlock('root', initBlock$, existsBlock$);
}
