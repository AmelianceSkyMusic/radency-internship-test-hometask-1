export const observable = (initData) => {
	let data = initData;
	const subscribers = new Set();

	return {
		updateValue(key, value) {
			data[key] = value;
			this.notify();
		},

		update(settingsObj) {
			data = { ...data, ...settingsObj };
			this.notify();
		},

		notify() {
			subscribers.forEach((callback) => callback(data));
		},

		addSubscriber(callback) {
			subscribers.add(callback);
		},

		removeSubscriber(callback) {
			subscribers.delete(callback);
		},

		setValue(key, value) {
			data[key] = value;
		},

		getValue(key) {
			return data[key];
		},

		get data() {
			return data;
		},
	};
};
