import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Input } from './styles';

interface SearchProps {
	placeholder: string,
	debounce?: number,
	onSearchValueChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = (({ placeholder, onSearchValueChange, debounce }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const timeoutIdRef = useRef(-1);

	const handleSearchChange = useCallback(() => {
		if (!debounce) {
			onSearchValueChange(inputRef.current.value);
			return;
		}

		if (timeoutIdRef.current !== -1) clearTimeout(timeoutIdRef.current);

		timeoutIdRef.current = setTimeout(() => {
			onSearchValueChange(inputRef.current.value);

			timeoutIdRef.current = -1;
		}, debounce);
	}, [onSearchValueChange, debounce, timeoutIdRef, inputRef]);

	const handleFocus = useCallback(() => {
		inputRef.current.focus();
	}, [inputRef]);

	return (
		<Container onClick={handleFocus}>
			<FaSearch size={22} />
			<Input
				type="text"
				placeholder={placeholder}
				ref={inputRef}
				onChange={handleSearchChange}
			/>
		</Container>
	)
});

export default Search;
