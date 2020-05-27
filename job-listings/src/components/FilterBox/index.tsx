import React from 'react';

import { Container, TechList, TechItem } from './styles';

import { ReactComponent as RemoveIcon } from '../../assets/images/icon-remove.svg';

interface IProps {
	tagList: string[],
	onTagListUpdade: Function
}

const FilterBox: React.FC<IProps> = ({ tagList, onTagListUpdade }) => {
	return (
		<Container>
			<TechList>
				{tagList.map(tag => (
					<TechItem key={tag}>
						<span>{tag}</span>
						<button onClick={() => {
							const newTagList = tagList.filter(tagFilter => tag !== tagFilter);

							onTagListUpdade(newTagList);
						}}>
							<RemoveIcon />
						</button>
					</TechItem>
				))}
			</TechList>
			<button onClick={() => onTagListUpdade([])}>Clear</button>
		</Container>
	);
}

export default FilterBox;
