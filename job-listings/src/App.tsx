import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import FilterBox from './components/FilterBox';
import JobBox from './components/JobBox';

import PhotosnapLogo from './assets/images/photosnap.svg';
import MyHomeLogo from './assets/images/myhome.svg';

import cyan from './styles/themes/cyan';
import GlobalStyle from './styles/globalStyle';
import { Container, JobList } from './styles';

const App: React.FC = () => {
	function handleAddTag(tag: String) {
		console.log(`tag ${tag} added`);
	}

  return (
		<ThemeProvider theme={cyan}>
			<GlobalStyle />
			<Container>
				<Header />
				<FilterBox />
				<JobList>
					<li>
						<JobBox
							title="Senior Frontend Developer"
							company="Photosnap"
							logo={PhotosnapLogo}
							status={['NEW!', 'FEATURED']}
							infos={['1d ago', 'Full Time', 'USA only']}
							tags={['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript']}
							onAddTag={handleAddTag}
						/>
					</li>
					<li>
						<JobBox
							title="Junior Frontend Developer"
							company="MyHome"
							logo={MyHomeLogo}
							infos={['1d ago', 'Full Time', 'USA only']}
							tags={['Frontend', 'Junior', 'CSS', 'JavaScript']}
							onAddTag={handleAddTag}
						/>
					</li>
				</JobList>
			</Container>
		</ThemeProvider>
  );
}

export default App;
