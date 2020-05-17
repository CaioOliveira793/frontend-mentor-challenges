import React from 'react';

import { Container } from './styles';
import { ReactComponent as BackgroundImg } from '../../assets/bg-header-desktop.svg';

const Header: React.FC = () => {
	return (
		<Container>
			<BackgroundImg />
		</Container>
	);
}

export default Header;
