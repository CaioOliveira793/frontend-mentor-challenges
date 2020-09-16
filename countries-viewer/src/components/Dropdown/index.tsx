import React, { useCallback, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { Container, SelectionBox, Option } from './styles';

interface DropdownProps {
	className?: string;
	label?: string;
	list: { value: any, label: string }[];
	initialListItemIndex?: number;
	onSelectedValueChange: (value: any) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, list, initialListItemIndex, onSelectedValueChange, className }) => {
	const [visible, setVisible] = useState(false);
	const [activeItem, setActiveItem] = useState(() => {
		if (initialListItemIndex)
			return { label: list[initialListItemIndex].label, index: initialListItemIndex }
		else
			return { label, index: -1 }
	});

	const containerRef = useRef<HTMLDivElement>(null);

	const handleOpenSelectionBox = useCallback(() => {
		setVisible(true);
		containerRef.current?.focus();
	}, [setVisible, containerRef]);

	const handleCloseSelectionBox = useCallback(() => {
		setVisible(false);
		containerRef.current?.blur();
	}, [setVisible, containerRef]);

	const handleSelectItem = useCallback((index: number) => {
		setActiveItem({ label: list[index].label, index });
		handleCloseSelectionBox();

		onSelectedValueChange(list[index].value);
	}, [setActiveItem, handleCloseSelectionBox, onSelectedValueChange]);

	return (
		<Container
			className={className}
			onFocus={handleOpenSelectionBox}
			onBlur={handleCloseSelectionBox}
			tabIndex={1}
			ref={containerRef}
		>
			<label>{activeItem.label}</label>
			<FaAngleDown size={22} />
			{visible &&
				<SelectionBox>
					{list.map(({ label }, index) => (
						<Option
							key={index}
							onClick={() => handleSelectItem(index)}
							// activeOption={activeItem.index === index}
						>
							{label}
						</Option>
					))}
				</SelectionBox>
			}
		</Container>
	);
}

export default Dropdown;
