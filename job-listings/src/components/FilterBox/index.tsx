import React from 'react';

import { Container, TechList, TechItem } from './styles';

import { ReactComponent as RemoveIcon } from '../../assets/icon-remove.svg';

const FilterBox: React.FC = () => {
	function handleClearFilter() {
		console.log('filter cleared');
	}

	function handleRemoveItem() {
		console.log('Item removed');
	}

	return (
		<Container>
			<TechList>
				<TechItem>
					<span>Frontend</span>
					<button onClick={handleRemoveItem}>
						<RemoveIcon />
					</button>
				</TechItem>
				<TechItem>
					<span>CSS</span>
					<button onClick={handleRemoveItem}>
						<RemoveIcon />
					</button>
				</TechItem>
				<TechItem>
					<span>Javascript</span>
					<button onClick={handleRemoveItem}>
						<RemoveIcon />
					</button>
				</TechItem>
			</TechList>
			<button onClick={handleClearFilter}>Clear</button>
		</Container>
	);
}

export default FilterBox;
