import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Input } from './styles';

interface SearchProps {
	placeholder: string
}

export interface SearchForwardRef {
	getValue: () => string;
}

const Search = forwardRef<SearchForwardRef, SearchProps>(({ placeholder }, ref) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFocus = useCallback(() => {
		inputRef.current.focus();
	}, [inputRef]);

	const getValue = useCallback(() => {
		return inputRef.current.value;
	}, [inputRef]);

	useImperativeHandle(ref, () => ({
		getValue
	}), [getValue]);

	return (
		<Container onClick={handleFocus}>
			<FaSearch size={22} />
			<Input type="text" placeholder={placeholder} ref={inputRef} />
		</Container>
	);
});

export default Search;
