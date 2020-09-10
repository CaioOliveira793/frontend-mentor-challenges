import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		border-collapse: collapse;
		font-size: 14px;
		font-family: 'Nunito Sans', sans-serif;
	}

	body {
		height: 100vh;
		background: ${({ theme }) => theme.colors.background};
	}
`;
