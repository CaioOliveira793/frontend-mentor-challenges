import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { RouteComponentProps } from '@reach/router';

import Header from '../../components/Header';
import Info from '../../components/Info';
import Tag from '../../components/Tag';

import { Container, NavigationContainer, StyledLink, CountryContentContainer,
	FlagImage, CountryDetailsContainer, Name, InfoContainer, TagContainer } from './styles';

const Country: React.FC<RouteComponentProps> = ({ location }) => {
	useEffect(() => {
		const { pathname } = location;
		const countryName = pathname.substring(pathname.lastIndexOf('/') + 1);

		console.log(countryName);
	}, [location]);


	return (
		<Container>
			<Header />
			<NavigationContainer>
				<StyledLink to="/">
					<FaArrowLeft size={16} />
					Back
				</StyledLink>
			</NavigationContainer>
			<CountryContentContainer>
				<FlagImage src="https://restcountries.eu/data/bra.svg" />
				<CountryDetailsContainer>
					<Name>Brazil</Name>
					<InfoContainer>
						<Info infoKey="Native Name" infoValue="Brasil" />
						<Info infoKey="Population" infoValue="1100000000" />
						<Info infoKey="Region" infoValue="Americas" />
						<Info infoKey="Sub Region" infoValue="South America" />
						<Info infoKey="Capital" infoValue="Brasília" />
						<Info infoKey="Top Level Domain" infoValue=".br" />
						<Info infoKey="Currencies" infoValue="Real" />
						<Info infoKey="Languages" infoValue="Português" />
					</InfoContainer>
					<TagContainer>
						Border Countries:
						<Tag>France</Tag>
						<Tag>France</Tag>
						<Tag>France</Tag>
						<Tag>Germany</Tag>
						<Tag>Germany</Tag>
						<Tag>Germany</Tag>
					</TagContainer>
				</CountryDetailsContainer>
			</CountryContentContainer>
		</Container>
	);
}

export default Country;
