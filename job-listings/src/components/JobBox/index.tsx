import React from 'react';

import {
	Container,
	Logo,
	JobInfos,
	Company,
	Title,
	Status,
	Info,
	TagList,
	Tag
} from './styles';

interface IProps {
	title: string,
	logo: string,
	company: string,
	status?: string[],
	infos: string[],
	tags: string[],
	onTagSelected: (tag: string) => void,
}

const JobBox: React.FC<IProps> = ({
	logo,
	title,
	company,
	status,
	tags,
	infos,
	onTagSelected
}) => {
	return (
		<Container>
			<Logo src={logo} alt="Logo"/>
			<JobInfos>
				<div>
					<Company>{company}</Company>
					{status?.map((stat, index) => (
						<Status key={index}>{stat}</Status>
					))}
				</div>
				<Title>{title}</Title>
				<div>
					{infos.map((info, index) => (
						<Info key={index}>{info}</Info>
					))}
				</div>
			</JobInfos>
			<TagList>
				{tags.map((tag, index) => (
					<Tag
						key={index}
						onClick={() => onTagSelected(tag)}
					>
						{tag}
					</Tag>
				))}
			</TagList>
		</Container>
	);
}

export default JobBox;
