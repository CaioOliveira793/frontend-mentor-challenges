import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Search, { SearchForwardRef } from '../components/Search';
import Dropdown from '../components/Dropdown';

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
	margin-top: 48px;
	padding: 0px 40px;
`;

export default function Home() {
	const searchRef = useRef<SearchForwardRef>(null);

	const [list, setList] = useState([
		{ value: 'africa', label: 'Africa' },
		{ value: 'america', label: 'America' },
		{ value: 'asia', label: 'Asia' },
		{ value: 'europe', label: 'Europe' },
		{ value: 'oceania', label: 'Oceania' }
	]);

  return (
		<Container>
			<Header />
			<SearchContainer>
				<Search placeholder="Search for a country..." ref={searchRef} />
				<Dropdown label="Filter by Region" list={list} />
			</SearchContainer>
		</Container>
	)
}
