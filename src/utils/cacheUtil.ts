/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface CacheUtil {
	set: (key: string, object: any) => void;
	get: (key: string) => any;
	remove: (key: string) => void;
	removeAll: () => void;
}

export const cacheUtil: CacheUtil = {
	set: (key, object) => {
		localStorage.setItem(key, JSON.stringify(object));
	},
	get: (key) => JSON.parse(localStorage.getItem(key) ?? "{}"),
	remove: (key) => localStorage.removeItem(key),
	removeAll: () => localStorage.clear(),
};
