import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;

	height: 30px;
	padding: 12px 26px;
	border-radius: ${({ theme }) => theme.value.borderRadius};

	background: ${({ theme }) => theme.value.colors.elements};
	box-shadow: ${({ theme }) => theme.value.shadow};
	color: ${({ theme }) => theme.value.colors.text};
	text-decoration: none;
`;
