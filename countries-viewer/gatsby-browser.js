import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './src/styles/GlobalStyle';

import darkTheme from './src/styles/themes/dark';

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={darkTheme}>
		<GlobalStyle />
		{element}
	</ThemeProvider>
);
