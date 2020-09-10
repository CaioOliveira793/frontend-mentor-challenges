import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

  * {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		border-collapse: collapse;
		font-size: 1rem;
		font-family: 'Nunito Sans', sans-serif;
		color: "#0ff";
	}

	html, body {
		font-size: 14px;
	}
`;
