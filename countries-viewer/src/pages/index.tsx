import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';


const SearchContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	flex-basis: 100%;
	align-items: center;
	justify-content: space-between;

	max-width: ${({ theme }) => theme.value.maxPageWidth};
	margin-top: 48px;
	padding: 0px 40px;
`;

export default function Home() {
	const [list, setList] = useState([
		{ value: 'africa', label: 'Africa' },
		{ value: 'america', label: 'America' },
		{ value: 'asia', label: 'Asia' },
		{ value: 'europe', label: 'Europe' },
		{ value: 'oceania', label: 'Oceania' }
	]);

  return (
		<>
			<Header />
			<SearchContainer>
				<Search placeholder="Search for a country..." />
				<Dropdown label="Filter by Region" list={list} />
			</SearchContainer>
		</>
	)
}
