import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import Header from '../components/Header';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';

import countriesAPI from '../services/countriesAPI';

const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	flex-basis: 100%;
	align-items: center;
	justify-content: flex-start;
`;

const StyledSearch = styled(Search)`
	flex-shrink: 4;
`;

const SearchContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	flex-basis: 100%;
	align-items: center;
	justify-content: space-between;
	gap: 32px;

	max-width: ${({ theme }) => theme.value.maxPageWidth};
	width: 100%;
	margin: 48px 0px;
	padding: 0px 40px;

	@media (max-width: 575px) {
		flex-wrap: wrap;
		gap: 16px;
	}
`;

const CountryCardContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	flex-basis: 100%;
	align-items: flex-start;
	justify-content: space-evenly;

	max-width: ${({ theme }) => theme.value.maxPageWidth};
	width: 100%;
	gap: 32px;
	margin-bottom: 32px;
	padding: 0px 40px;

	@media (max-width: 575px) {
		margin-bottom: 18px;
		gap: 18px;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const StyledCountryCard = styled(CountryCard)`
	@media (max-width: 575px) {
		max-width: 200px;
		max-height: 310px;
	}
`;

const regions = [
	{ value: 'africa', label: 'Africa' },
	{ value: 'americas', label: 'America' },
	{ value: 'asia', label: 'Asia' },
	{ value: 'europe', label: 'Europe' },
	{ value: 'oceania', label: 'Oceania' }
];

const regionsToIndex = {
	africa: 0,
	americas: 1,
	asia: 2,
	europe: 3,
	oceania: 4,
};

interface CountryData {
	name: string;
	flag: string;
	population: number;
	region: string;
	capital: string;
	alpha3Code: string;
}


const Home: React.FC<RouteComponentProps> = ({ location }) => {
	const [countryDataState, setCountryDataState] = useState<CountryData[]>([]);
	const [params, ] = useState(() => {
		const searchParams = new URLSearchParams(location?.search);
		const searchRegion = searchParams.get('region') as 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';

		return {
			searchParams,
			name: searchParams.get('name'),
			region: searchRegion?.match(/^(africa|americas|asia|europe|oceania)$/) ? searchRegion : undefined,
		}
	});


	useEffect(() => {
		async function loadCountries() {
			let response;
			if (params.name) {
				response = await countriesAPI.get<CountryData[]>(`/name/${params.name}?fields=name;population;region;capital;flag;alpha3Code`);
			} else if (params.region) {
				response = await countriesAPI.get<CountryData[]>(`/region/${params.region}?fields=name;population;region;capital;flag;alpha3Code`);
			} else {
				response = await countriesAPI.get<CountryData[]>('/all?fields=name;population;region;capital;flag;alpha3Code');
			}
			const { data } = response;
			setCountryDataState(data);
		}
		loadCountries();
	}, [params]);

	const handleSearchValueChange = useCallback(async (searchValue: string) => {
		try {
			const response = await countriesAPI
				.get<CountryData[]>(`/name/${searchValue}?fields=name;population;region;capital;flag;alpha3Code`);
			const { data } = response;
			setCountryDataState(data);
		} catch (err) {
			setCountryDataState([]);
		}
	}, []);

	const handleDropdownSelectionChange = useCallback(async (selectedValue: typeof regions[number]['value']) => {
		try {
			const response = await countriesAPI
				.get<CountryData[]>(`/region/${selectedValue}?fields=name;population;region;capital;flag;alpha3Code`);
			const { data } = response;
			setCountryDataState(data);
		} catch (err) {
			setCountryDataState([]);
		}
	}, []);

  return (
		<Container>
			<Header />
			<SearchContainer>
				<StyledSearch
					debounce={500}
					onSearchValueChange={handleSearchValueChange}
					initialValue={params.name as string}
					placeholder="Search for a country..."
					type="text"
				/>
				<Dropdown
					label="Filter by Region"
					list={regions}
					initialListItemIndex={(params.region) ? regionsToIndex[params.region] : undefined}
					onSelectedValueChange={handleDropdownSelectionChange}
				/>
			</SearchContainer>
			<CountryCardContainer>
				{countryDataState.map((countryData, index) => (
					<StyledLink key={index} to={`countries/${countryData.alpha3Code.toLowerCase()}`}>
						<StyledCountryCard
							flagURL={countryData.flag}
							countryName={countryData.name}
							population={countryData.population}
							region={countryData.region}
							capital={countryData.capital}
						/>
					</StyledLink>
				))}
			</CountryCardContainer>
		</Container>
	)
}

export default Home;
