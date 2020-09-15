import { HTMLProps } from "react";
import styled, { StyledFunction } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	flex-basis: 460px;
	align-items: center;
	justify-content: flex-start;

	max-width: 460px;
	width: 100%;
	height: 60px;
	padding: 18px 20px;
	border-radius: ${({ theme }) => theme.value.borderRadius};

	background: ${({ theme }) => theme.value.colors.elements};
	box-shadow: ${({ theme }) => theme.value.shadow};

	> svg {
		margin-left: 10px;

		color: ${({ theme }) => theme.value.colors.text};
	}
`;

export const Input = styled.input`
	display: flex;
	flex-basis: 100%;
	
	margin-left: 28px;

	background: transparent;
	color: ${({ theme }) => theme.value.colors.text};

	::placeholder {
		color: ${({ theme }) => theme.value.colors.text};
	}
`;
