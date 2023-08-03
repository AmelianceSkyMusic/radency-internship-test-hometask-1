export function appendInitBlock(parentId, initBlock$, existsBlock$) {
	if (existsBlock$) {
		existsBlock$.innerHTML = '';
		existsBlock$.append(initBlock$);
	} else {
		const root$ = document.getElementById(parentId);
		root$?.append(initBlock$);
	}
}
