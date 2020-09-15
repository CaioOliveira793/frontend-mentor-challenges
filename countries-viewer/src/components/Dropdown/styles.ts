import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	flex-basis: 200px;
	align-items: center;
	justify-content: flex-start;
	position: relative;

	max-width: 200px;
	flex-shrink: 0;
	width: 100%;
	height: 60px;
	padding: 18px 20px;
	border-radius: ${({ theme }) => theme.value.borderRadius};

	background: ${({ theme }) => theme.value.colors.elements};
	box-shadow: ${({ theme }) => theme.value.shadow};

	cursor: pointer;

	> label {
		color: ${({ theme }) => theme.value.colors.text};

		pointer-events: none;
	}

	> svg {
		position: absolute;
		left: 160px;

		color: ${({ theme }) => theme.value.colors.text};

		pointer-events: none;
	}
`;

export const SelectionBox = styled.div`
	display: flex;
	flex-flow: column nowrap;
	flex-basis: 200px;
	align-items: flex-start;
	justify-content: center;
	
	position: absolute;
	left: 0;
	top: 64px;
	z-index: 10;

	width: 100%;
	padding: 8px 0px;
	border-radius: ${({ theme }) => theme.value.borderRadius};

	background: ${({ theme }) => theme.value.colors.elements};
	box-shadow: ${({ theme }) => theme.value.shadow};
	color: ${({ theme }) => theme.value.colors.text};
`;

export const Option = styled.span`
	width: 100%;
	padding: 8px 32px;

	/* background: ${({ theme, activeOption }) => (activeOption) ? theme.value.colors.scroll : theme.value.colors.elements}; */
	/* background: ${({ theme }) => theme.value.colors.elements}; */
	color: ${({ theme }) => theme.value.colors.text};

	cursor: pointer;
`;
