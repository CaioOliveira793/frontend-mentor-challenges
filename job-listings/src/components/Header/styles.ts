import styled from 'styled-components';

import backgroundDesktop from '../../assets/images/bg-header-desktop.svg';
import backgroundMobile from '../../assets/images/bg-header-mobile.svg';

export const Container = styled.header`
	display: flex;
	background: ${props => props.theme.colors.primary} url(${backgroundDesktop}) repeat-x;

	width: 100%;
	height: 156px;

	@media (max-width: 375px) {
		background: ${props => props.theme.colors.primary} url(${backgroundMobile});
	}
`;
