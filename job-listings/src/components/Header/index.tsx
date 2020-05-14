import React from 'react';

import { Container } from './styles';
import background from '../../assets/bg-header-desktop.svg';

const Header: React.FC = () => {
	return (
		<Container>
			<img src={background} alt="background"/>
		</Container>
	);
}

export default Header;
