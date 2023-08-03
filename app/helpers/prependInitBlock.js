export function prependInitBlock(parentId, initBlock$, existsBlock$) {
	if (existsBlock$) {
		existsBlock$.innerHTML = '';
		existsBlock$.prepend(initBlock$);
	} else {
		const root$ = document.getElementById(parentId);
		root$?.prepend(initBlock$);
	}
}
