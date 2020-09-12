import React, { useCallback, useState } from 'react';
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

const SearchContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	flex-basis: 100%;
	align-items: center;
	justify-content: space-between;

	max-width: ${({ theme }) => theme.value.maxPageWidth};
	width: 100%;
	margin: 48px 0px;
	padding: 0px 40px;
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
	padding: 0px 40px;
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

export default function Home() {
	const [countryDataState, setCountryDataState] = useState<CountryData[]>([]);

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
				<Search placeholder="Search for a country..." debounce={500} onSearchValueChange={handleSearchValueChange} />
				<Dropdown label="Filter by Region" list={regions} onSelectedValueChange={handleDropdownSelectionChange} />
			</SearchContainer>
			<CountryCardContainer>
				{countryDataState.map((countryData, index) => (
					<CountryCard
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
