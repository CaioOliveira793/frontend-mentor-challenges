import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Search from '../components/Search';


const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	flex-basis: 100%;
	align-items: center;
	justify-content: flex-start;

	max-width: ${({ theme }) => theme.value.maxPageWidth};
	margin-top: 48px;
	padding: 0px 40px;
`;

export default function Home() {
  return (
		<>
			<Header />
			<Container>
				<Search placeholder="Search for a country..." />
			</Container>
		</>
	)
}
