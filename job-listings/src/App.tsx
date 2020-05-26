import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import FilterBox from './components/FilterBox';
import JobBox from './components/JobBox';

import jobData from './assets/jobList';

import cyan from './styles/themes/cyan';
import GlobalStyle from './styles/globalStyle';
import { Container, JobList } from './styles';

const App: React.FC = () => {
	const [tagList, setTagList] = useState<string[]>([]);

	const handleTagSelected = useCallback((tag: string) => {
		setTagList(oldTagList => {
			if (oldTagList.includes(tag))
				return oldTagList;
			else
				return [...oldTagList, tag];
		});
	}, []);

  return (
		<ThemeProvider theme={cyan}>
			<GlobalStyle />
			<Container>
				<Header />
				<FilterBox
					onTagListUpdade={setTagList}
					tagList={tagList}
				/>
				<JobList>
					{jobData
						.filter(job => {
							if (tagList.length === 0) return true;

							const jobTags = [...job.tools, ...job.languages];
							let tagsFinded = 0;

							jobTags.forEach((jobTag) => {
								if (tagList.find(tag => tag === jobTag)) tagsFinded++;
							});

							return tagsFinded === tagList.length;
						}).map(job => {
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
										onTagSelected={handleTagSelected}
									/>
								</li>
							);
						})
					}
				</JobList>
			</Container>
		</ThemeProvider>
  );
}

export default App;
