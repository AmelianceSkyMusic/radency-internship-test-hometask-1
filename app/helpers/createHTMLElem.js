export function createHTMLElem(parent$, elementType, params, text) {
	const element$ = document.createElement(elementType);

	if (params?.class) {
		const classes = params.class.split(' ');
		element$.classList.add(...classes);
		delete params.class;
	}

	if (params?.id) {
		element$.setAttribute('id', params.id);
		delete params.id;
	}

	const paramsArray = Object.entries(params);
	if (paramsArray.length > 0) {
		paramsArray.forEach((attribute) => {
			element$.setAttribute(attribute[0], attribute[1]);
		});
	}

	if (text) {
		element$.innerHTML = text;
	}

	parent$.append(element$);

	return element$;
}
