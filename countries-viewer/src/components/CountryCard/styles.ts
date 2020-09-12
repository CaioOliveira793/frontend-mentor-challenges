import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;

	max-width: 280px;
	height: 360px;
	overflow-y: auto;
	padding-bottom: 40px;
	border-radius: ${({ theme }) => theme.value.borderRadius};

	background: ${({ theme }) => theme.value.colors.elements};
	box-shadow: ${({ theme }) => theme.value.shadow};

	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.value.colors.scroll};
		border-radius: 3px;
	}
`;

export const Name = styled.strong`
	margin: 24px;
	font-size: 20px;
	font-weight: 800;

	color: ${({ theme }) => theme.value.colors.text};
`;

export const Flag = styled.img`
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
