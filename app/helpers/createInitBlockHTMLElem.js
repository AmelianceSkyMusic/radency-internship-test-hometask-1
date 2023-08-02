import { createHTMLElem } from './createHTMLElem.js';

export function createInitBlockHTMLElem(elementType, params, text) {
	const fragment$ = new DocumentFragment();

	const existsBlock$ = document.getElementById(params.id) || null;

	let initBlock$ = null;
	if (!existsBlock$) {
		initBlock$ = createHTMLElem(fragment$, elementType, params, text);
	}

	return [existsBlock$ ? fragment$ : initBlock$, existsBlock$];
}
