import { appendInitBlock } from '../../../../helpers/appendInitBlock.js';
import { CATEGORIES } from '../../../../constants/CATEGORIES.js';
import { createHTMLElem } from '../../../../helpers/createHTMLElem.js';
import { createInitBlockHTMLElem } from '../../../../helpers/createInitBlockHTMLElem.js';
import { getObjKeyByValue } from '../../../../helpers/getObjKeyByValue.js';
import { removeDialog } from './removeDialog.js';

export function createDialog(title, name, category, content, callback) {
	console.log('category: ', category);
	const [initBlock$, existsBlock$] = createInitBlockHTMLElem('div', { id: 'dialog-container', class: 'dialog-container' });
	const dialogContainer$ = createHTMLElem(initBlock$, 'dialog', { class: 'dialog', open: true });

	createHTMLElem(dialogContainer$, 'h3', { class: 'dialog-title' }, title);

	const form$ = createHTMLElem(dialogContainer$, 'form', { id: 'dialog-form', class: 'dialog-form' });

	createHTMLElem(form$, 'label', { class: 'dialog-form-label', for: 'dialog-form__name' }, 'Name');
	const dialogFormName$ = createHTMLElem(form$, 'input', { class: 'dialog-form-input dialog-form__name', id: 'dialog-form__name' });
	dialogFormName$.value = name || '';

	createHTMLElem(form$, 'label', { class: 'dialog-form-label', for: 'dialog-form__category' }, 'Category');
	const dialogFormCategory$ = createHTMLElem(form$, 'select', { class: 'dialog-form-input dialog-form__category', id: 'dialog-form__category' });
	Object.entries(CATEGORIES)
		.sort()
		.forEach((categoryTuple) => {
			createHTMLElem(dialogFormCategory$, 'option', {}, categoryTuple[1]).value = categoryTuple[0];
		});
	dialogFormCategory$.value = getObjKeyByValue(CATEGORIES, category);

	createHTMLElem(form$, 'label', { class: 'dialog-form-label', for: 'dialog-form__content' }, 'Content');
	const dialogFormContent$ = createHTMLElem(form$, 'textarea', { class: 'dialog-form-input dialog-form__content', id: 'dialog-form__content' });
	dialogFormContent$.value = content || '';

	const buttonsContainer$ = createHTMLElem(form$, 'div', { class: 'dialog-form-buttons' });

	const close$ = createHTMLElem(buttonsContainer$, 'button', { class: 'dialog-form-button', type: 'reset' }, '❌');
	close$.addEventListener('click', removeDialog);

	createHTMLElem(buttonsContainer$, 'button', { class: 'dialog-form-button', type: 'submit' }, '✔️');

	form$.addEventListener('submit', (event) => {
		event.preventDefault();
		const name = dialogFormName$.value;
		const category = dialogFormCategory$.value;
		const content = dialogFormContent$.value;
		const formData = { name, category, content };
		callback(formData);
		removeDialog();
	});

	appendInitBlock('root', initBlock$, existsBlock$);
}
