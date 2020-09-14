import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
`;

export const InfoKey = styled.span`
	font-weight: 600;
	margin-right: 4px;

	color: ${({ theme }) => theme.value.colors.text};
`;

export const InfoValue = styled.span`
	color: ${({ theme }) => theme.value.colors.text};
`;
