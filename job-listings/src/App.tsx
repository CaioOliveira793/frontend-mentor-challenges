import React from 'react';

import Header from './components/Header';
import FilterBox from './components/FilterBox';

import GlobalStyle from './styles/globalStyle';
import { Container } from './styles';

const App: React.FC = () => {
  return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
				<FilterBox />
				<section>users</section>
			</Container>
		</>
  );
}

export default App;
