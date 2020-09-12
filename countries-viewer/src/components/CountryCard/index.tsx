import React from 'react';

import { Container, Name, Flag, InfoKey, InfoValue } from './styles';

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
			<div>
				<InfoKey>Population: </InfoKey>
				<InfoValue>{population}</InfoValue>
			</div>
			<div>
				<InfoKey>Region: </InfoKey>
				<InfoValue>{region}</InfoValue>
			</div>
			<div>
				<InfoKey>Capital: </InfoKey>
				<InfoValue>{capital}</InfoValue>
			</div>
		</Container>
	);
}

export default CountryCard;
