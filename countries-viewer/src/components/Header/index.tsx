import React from 'react';
import { FaMoon } from 'react-icons/fa';

import { Container, Title, ThemeSwitcher } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<header>
				<Title>Where in the world?</Title>
				<ThemeSwitcher>
					<FaMoon size={18} />
					<span>Dark Mode</span>
				</ThemeSwitcher>
			</header>
		</Container>
	);
}

export default Header;
