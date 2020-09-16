import React from 'react';

import { Container, Name, Flag, StyledInfo } from './styles';

interface CountryCardProps {
	className?: string;
	flagURL: string;
	countryName: string;
	population: number;
	region: string;
	capital: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ countryName, flagURL, population, region, capital, className }) => {
	return (
		<Container className={className}>
			<Flag src={flagURL} alt=""/>
			<Name>{countryName}</Name>
			<StyledInfo infoKey="Population" infoValue={population} />
			<StyledInfo infoKey="Region" infoValue={region} />
			<StyledInfo infoKey="Capital" infoValue={capital} />
		</Container>
	);
}

export default CountryCard;
