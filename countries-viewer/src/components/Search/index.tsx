import React, { useCallback, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Input } from './styles';

interface SearchProps {
	placeholder: string
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFocus = useCallback(() => {
		inputRef.current.focus();
	}, [inputRef]);

	return (
		<Container onClick={handleFocus}>
			<FaSearch size={22} />
			<Input type="text" placeholder={placeholder} ref={inputRef} />
		</Container>
	);
}

export default Search;
