import React, { useCallback, useContext } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { FaMoon } from 'react-icons/fa';

import { Container } from './styles';

import capitalize from '../../utils/capitalize';

const ThemeSwitcher: React.FC = () => {
	const themeContext = useContext<DefaultTheme>(ThemeContext);

	const toogleTheme = useCallback(() => {
		themeContext.choose((themeContext.value.name === 'light') ? 'dark' : 'light');
	}, [themeContext]);

	return (
		<Container onClick={toogleTheme}>
			<FaMoon size={18} />
			<span>{`${capitalize(themeContext.value.name)} Mode`}</span>
		</Container>
	);
}

export default ThemeSwitcher;
