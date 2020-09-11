import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;

	height: 80px;

	background: ${({ theme }) => theme.value.colors.elements};
	box-shadow: ${({ theme }) => theme.value.shadow};

	> header {
		display: flex;
		flex-flow: row nowrap;
		flex-basis: 100%;
		align-items: center;
		justify-content: space-between;

		max-width: ${({ theme }) => theme.value.maxPageWidth};
		height: 100%;
		padding: 40px;
	}
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: 800;

	color: ${({ theme }) => theme.value.colors.text};
`;
