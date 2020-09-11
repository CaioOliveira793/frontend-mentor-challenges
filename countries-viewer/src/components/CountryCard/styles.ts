import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;

	margin-bottom: 48px;
	padding-bottom: 40px;
	border-radius: ${({ theme }) => theme.value.borderRadius};

	background: ${({ theme }) => theme.value.colors.elements};
	box-shadow: ${({ theme }) => theme.value.shadow};
`;

export const Name = styled.strong`
	margin: 24px;
	font-size: 20px;
	font-weight: 800;

	color: ${({ theme }) => theme.value.colors.text};
`;

export const Flag = styled.img`
	max-width: 280px;
	width: 100%;

	border-top-left-radius: ${({ theme }) => theme.value.borderRadius};
	border-top-right-radius: ${({ theme }) => theme.value.borderRadius};
`;

export const InfoKey = styled.span`
	margin-left: 24px;
	font-weight: 600;

	color: ${({ theme }) => theme.value.colors.text};
`;

export const InfoValue = styled.span`
	color: ${({ theme }) => theme.value.colors.text};
`;
