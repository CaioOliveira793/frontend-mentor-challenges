import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import FilterBox from './components/FilterBox';
import JobBox from './components/JobBox';

import jobData from './assets/jobList';

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
					{jobData.map(job => {
						const status = [];

						if (job.new)
							status.push('NEW!');
						if (job.featured)
							status.push('FEATURED!');

						return (
							<li key={job.id}>
								<JobBox
									title={job.position}
									company={job.company}
									logo={job.logo}
									status={status}
									infos={[job.postedAt, job.contract, job.location]}
									tags={[...job.tools, ...job.languages]}
									onAddTag={handleAddTag}
								/>
							</li>
						);
					})}
				</JobList>
			</Container>
		</ThemeProvider>
  );
}

export default App;
