import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

function themePicker(state: typeof dark, action: 'light' | 'dark') {
	switch (action) {
		case 'light':
			return light;
		case 'dark':
			return dark;
	}
}

const RootWrapper: React.FC = ({ children }) => {
	const [themeState, dispatch] = useReducer(themePicker, dark);

	return (
		<ThemeProvider theme={{ value: themeState, choose: dispatch }}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
}

export default RootWrapper;
