import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function usePersistState<T>(key: string, initialState: T | (() => T)) {
	const [state, setState] = useState<T>(() => {
		const storedState = localStorage.getItem(key);
		if (storedState) {
			return JSON.parse(storedState);

		} else if (initialState instanceof Function) {
			const state = initialState();
			localStorage.setItem(key, JSON.stringify(state));
			return state;

		} else {
			localStorage.setItem(key, JSON.stringify(initialState));
			return initialState;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState] as [T, Dispatch<SetStateAction<T>>];
}

export default usePersistState;
