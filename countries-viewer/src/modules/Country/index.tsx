import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { RouteComponentProps, useNavigate } from '@reach/router';

import Header from '../../components/Header';
import Info from '../../components/Info';
import Tag from '../../components/Tag';

import countriesAPI from '../../services/countriesAPI';

import { Container, NavigationContainer, StyledLink, CountryContentContainer,
	FlagImage, CountryDetailsContainer, Name, InfoContainer, TagContainer } from './styles';

interface CountryDetailData {
	flag: string;
	name: string;
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	topLevelDomain: string[];
	capital: string;
	currencies: {
		code: string;
		name: string;
	}[];
	languages: {
		name: string;
	}[];
	borders: {
		name: string;
	}[];
}


const Country: React.FC<RouteComponentProps> = ({ location }) => {
	const navigate = useNavigate();
	const [countryDetailsData, setCountryDetailsData] = useState<CountryDetailData>(null);

	useEffect(() => {
		const { pathname } = location;
		const countryCode = pathname.substring(pathname.lastIndexOf('/') + 1);

		async function loadCountryDetails() {
			try {
				const countryResponse = await countriesAPI.get<CountryDetailData>(`/alpha/${countryCode}`);
				const countryData = countryResponse.data;

				let borderCountryData = [];
				if (countryData.borders.length >= 1) {
					const borderCountryResponse = await countriesAPI.get(`/alpha?codes=${countryData.borders.join(';')}`);
					borderCountryData = borderCountryResponse.data;
				}

				setCountryDetailsData({
					...countryData,
					borders: borderCountryData
				});
			} catch (err) {
				if (err.response.status) navigate('/');
			}
		}
		loadCountryDetails();
	}, [location, setCountryDetailsData]);


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
				{countryDetailsData &&
					<>
						<FlagImage src={countryDetailsData.flag} />
						<CountryDetailsContainer>
							<Name>{countryDetailsData.name}</Name>
							<InfoContainer>
								<Info infoKey="Native Name" infoValue={countryDetailsData.nativeName} />
								<Info infoKey="Population" infoValue={countryDetailsData.population} />
								<Info infoKey="Region" infoValue={countryDetailsData.region} />
								<Info infoKey="Sub Region" infoValue={countryDetailsData.subregion} />
								<Info infoKey="Capital" infoValue={countryDetailsData.capital} />
								<Info infoKey="Top Level Domain" infoValue={countryDetailsData.topLevelDomain[0]} />
								<Info infoKey="Currencies" infoValue={countryDetailsData.currencies[0].name} />
								<Info infoKey="Languages" infoValue={countryDetailsData.languages[0].name} />
							</InfoContainer>
							{countryDetailsData.borders &&
								<TagContainer>
									Border Countries:
									{countryDetailsData.borders.map(({ name }) => (
										<Tag>{name}</Tag>
									))}
								</TagContainer>
							}
						</CountryDetailsContainer>
					</>
				}
			</CountryContentContainer>
		</Container>
	);
}

export default Country;
