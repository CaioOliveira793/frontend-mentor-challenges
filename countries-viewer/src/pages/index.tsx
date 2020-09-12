import React, { useCallback } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';

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

export default function Home() {
	const handleSearchValueChange = useCallback((searchValue: string) => {
		console.log(searchValue);
	}, []);

	const handleDropdownSelectionChange = useCallback((value: typeof regions[number]['value']) => {
		console.log(value);
	}, []);


  return (
		<Container>
			<Header />
			<SearchContainer>
				<Search placeholder="Search for a country..." debounce={500} onSearchValueChange={handleSearchValueChange} />
				<Dropdown label="Filter by Region" list={regions} onSelectedValueChange={handleDropdownSelectionChange} />
			</SearchContainer>
			{/* https://restcountries.eu/rest/v2/region/oceania?fields=name;population;region;capital;flag */}
			<CountryCardContainer>
				<CountryCard
					imageUrl="https://restcountries.eu/data/bra.svg"
					countryName="Brazil"
					population={200000000}
					region="Americas"
					capital="Brasília"
				/>
			</CountryCardContainer>
		</Container>
	)
}
