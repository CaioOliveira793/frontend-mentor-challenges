import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		border-collapse: collapse;
		font-size: 62.5%;
		font-family: Spartan, sans-serif;
		font-weight: 500;
		list-style: none;

		@media (max-width: 550px) {
			font-size: 50%;
		}
	}

	body, #root {
		height: 100vh;
		background: #effafa;
	}
`;
