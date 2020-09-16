import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	
	background: transparent;
	color: ${({ theme }) => theme.value.colors.text};

	> span {
		margin-left: 8px;
	}
`;