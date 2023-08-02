import { createHTMLElem } from '../helpers/createHTMLElem.js';

export function createMain() {
	const fragment$ = new DocumentFragment();
	const main$ = createHTMLElem(fragment$, 'main', { id: 'main', class: 'main' });
	const root$ = document.getElementById('root');
	root$?.prepend(main$);
}
