import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './src/styles/GlobalStyle';

import 'typeface-nunito-sans';

import darkTheme from './src/styles/themes/dark';

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={darkTheme}>
		<GlobalStyle />
		{element}
	</ThemeProvider>
);
