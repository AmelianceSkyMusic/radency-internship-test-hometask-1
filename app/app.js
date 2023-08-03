import { createHeader } from './layout/createHeader.js';
import { createMain } from './layout/createMain.js';
import { createTables } from './tables/createTables.js';
import { store } from './store/store.js';

export function app() {
	createMain();
	store.addSubscriber(createHeader);
	store.addSubscriber(createTables);
	store.update();
}
