import React, { useCallback, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { Container, SelectionBox, Option } from './styles';

interface DropdownProps {
	label: string,
	list: { value: any, label: string }[]
}

const Dropdown: React.FC<DropdownProps> = ({ label, list }) => {
	const [visible, setVisible] = useState(false);
	const [activeItem, setActiveItem] = useState(label);

	const containerRef = useRef<HTMLDivElement>(null);

	const handleOpenSelectionBox = useCallback(() => {
		setVisible(true);
		containerRef.current.focus();
	}, [setVisible]);

	const handleCloseSelectionBox = useCallback(() => {
		setVisible(false);
		containerRef.current.blur();
	}, [setVisible]);

	const handleSelectItem = useCallback((label: string, value: any) => {
		setActiveItem(label);
		handleCloseSelectionBox();

		console.log(value);
	}, []);

	return (
		<Container
			onFocus={handleOpenSelectionBox}
			onBlur={handleCloseSelectionBox}
			tabIndex={1}
			ref={containerRef}
		>
			<label>{activeItem}</label>
			<FaAngleDown size={22} />
			{visible &&
				<SelectionBox>
					{list.map(({ label, value }, index) => (
						<Option
							key={index}
							onClick={() => handleSelectItem(label, value)}
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
