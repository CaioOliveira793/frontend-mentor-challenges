import React from 'react';

import ThemeSwitcher from '../ThemeSwitcher';

import { Container, Title } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<header>
				<Title>Where in the world?</Title>
				<ThemeSwitcher />
			</header>
		</Container>
	);
}

export default Header;
