import React, { InputHTMLAttributes, useCallback, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Input } from './styles';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
	initialValue?: string;
	debounce?: number;
	onSearchValueChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = (({ initialValue, onSearchValueChange, debounce, className, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const timeoutIdRef = useRef(-1);

	const handleSearchChange = useCallback(() => {
		if (!debounce) {
			onSearchValueChange(inputRef.current!.value);
			return;
		}

		if (timeoutIdRef.current !== -1) clearTimeout(timeoutIdRef.current);

		timeoutIdRef.current = setTimeout(() => {
			onSearchValueChange(inputRef.current!.value);

			timeoutIdRef.current = -1;
		}, debounce);
	}, [onSearchValueChange, debounce, timeoutIdRef, inputRef]);

	const handleFocus = useCallback(() => {
		inputRef.current?.focus();
	}, [inputRef]);

	useEffect(() => {
		if (initialValue) inputRef.current!.value = initialValue;
	}, [initialValue]);


	return (
		<Container className={className} onClick={handleFocus}>
			<FaSearch size={22} />
			<Input
				ref={inputRef}
				onChange={handleSearchChange}
				{...rest}
			/>
		</Container>
	)
});

export default Search;
