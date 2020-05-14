import React from 'react';

import Header from './components/Header';

import GlobalStyle from './styles/global';
import { Container } from './styles';

const App: React.FC = () => {
  return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
				<section>users</section>
			</Container>
		</>
  );
}

export default App;
