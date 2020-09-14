import React from 'react';

import { Container } from './styles';

const Tag: React.FC = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	);
}

export default Tag;
