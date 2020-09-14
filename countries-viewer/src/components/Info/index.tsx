import React from 'react';

import { Container, InfoKey, InfoValue } from './styles';

interface InfoProps {
	className?: string;
	infoKey: string;
	infoValue: string | number;
}


const Info: React.FC<InfoProps> = ({ infoKey, infoValue, className }) => {
	return (
		<Container className={className}>
			<InfoKey>{`${infoKey}: `}</InfoKey>
			<InfoValue>{infoValue}</InfoValue>
		</Container>
	);
}

export default Info;
