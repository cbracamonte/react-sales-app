const baseUrl = "https://rickandmortyapi.com/api/";
const characterUrl = `${baseUrl}character/`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getUser = () => {
	return fetch(`${characterUrl}2`).then((response) => response.json());
};
