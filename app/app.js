import { createHeader } from './layout/createHeader.js';
import { store } from './store/store.js';

export function app() {
	store.addSubscriber(createHeader);
	store.update();
}
