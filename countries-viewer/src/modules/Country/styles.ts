import styled from 'styled-components';

import { Link } from '@reach/router';


export const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	flex-basis: 100%;
	align-items: center;
	justify-content: flex-start;
`;

export const NavigationContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	flex-basis: 100%;
	align-items: center;
	justify-content: space-between;
	gap: 32px;

	max-width: ${({ theme }) => theme.value.maxPageWidth};
	width: 100%;
	margin: 58px 0px;
	padding: 0px 40px;

	@media (max-width: 575px) {
		flex-wrap: wrap;
		gap: 16px;
	}
`;

export const StyledLink = styled(Link)`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;

	height: 40px;
	padding: 12px 26px;
	border-radius: ${({ theme }) => theme.value.borderRadius};

	background: ${({ theme }) => theme.value.colors.elements};
	box-shadow: ${({ theme }) => theme.value.shadow};
	color: ${({ theme }) => theme.value.colors.text};
	text-decoration: none;

	cursor: pointer;

	> svg {
		margin-right: 16px;
		color: ${({ theme }) => theme.value.colors.text};
		pointer-events: none;
	}
`;

export const CountryContentContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	gap: 92px;

	max-width: ${({ theme }) => theme.value.maxPageWidth};
	width: 100%;
	padding: 0px 40px;
`;

export const FlagImage = styled.img`
	max-width: 520px;
	width: 100%;
`;

export const CountryDetailsContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: center;

	width: 100%;
	height: 100%;
`;

export const Name = styled.h2`
	font-size: 26px;
	font-weight: 800;
	padding-bottom: 22px;
	color: ${({ theme }) => theme.value.colors.text};
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: space-between;
	justify-content: flex-start;
	gap: 8px 32px;

	width: 100%;
	height: 100px;
`;

export const TagContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-start;
	gap: 12px;

	margin-top: 32px;
	font-weight: 600;

	color: ${({ theme }) => theme.value.colors.text};
`;
