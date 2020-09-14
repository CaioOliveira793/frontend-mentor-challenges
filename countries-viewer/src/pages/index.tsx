import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps, WindowLocation } from '@reach/router';
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

interface CountryData {
	name: string;
	flag: string;
	population: number;
	region: string;
	capital: string;
}


const Home: React.FC<RouteComponentProps> = ({ location }) => {
	const [countryDataState, setCountryDataState] = useState<CountryData[]>([]);

	useEffect(() => {
		async function loadAllCountries() {
			const response = await countriesAPI.get<CountryData[]>('/all?fields=name;population;region;capital;flag');
			const { data } = response;
			setCountryDataState(data);
		}
		loadAllCountries();
	}, []);

	const handleSearchValueChange = useCallback(async (searchValue: string) => {
		const response = await countriesAPI.get<CountryData[]>(`/name/${searchValue}?fields=name;population;region;capital;flag`);
		const { data } = response;
		setCountryDataState(data);
	}, []);

	const handleDropdownSelectionChange = useCallback(async (selectedValue: typeof regions[number]['value']) => {
		const response = await countriesAPI.get<CountryData[]>(`/region/${selectedValue}?fields=name;population;region;capital;flag`);
		const { data } = response;
		setCountryDataState(data);
	}, []);


  return (
		<Container>
			<Header />
			<SearchContainer>
				<StyledSearch placeholder="Search for a country..." debounce={500} onSearchValueChange={handleSearchValueChange} />
				<Dropdown label="Filter by Region" list={regions} onSelectedValueChange={handleDropdownSelectionChange} />
			</SearchContainer>
			<CountryCardContainer>
				{countryDataState.map((countryData, index) => (
					<StyledCountryCard
						key={index}
						flagURL={countryData.flag}
						countryName={countryData.name}
						population={countryData.population}
						region={countryData.region}
						capital={countryData.capital}
					/>
				))}
			</CountryCardContainer>
		</Container>
	)
}

export default Home;
