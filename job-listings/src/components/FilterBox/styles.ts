import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
	max-width: 800px;

	position: relative;
	top: -30px;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 15px;
	padding: 0px 25px 15px 25px;
	border-radius: 4px;
	background: #fff;
	box-shadow: 15px 20px 15px -15px #ceeded;

	@media (max-width: 240px) {
		flex-flow: column wrap;
	}

	> button {
		cursor: pointer;
		margin-top: 15px;
		background: #fff;
		color: ${props => props.theme.colors.secondary};
		font-size: 1.3rem;
		font-weight: bold;

		:hover {
			color: ${props => props.theme.colors.primary};
			text-decoration: underline;
		}
	}
`;

export const TechList = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

export const TechItem = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-start;

	margin-top: 15px;
	margin-right: 10px;
	background: ${props => props.theme.colors.background[1]};

	span {
		padding: 5px;
		font-size: 1.3rem;
		font-weight: bold;
		color: ${props => props.theme.colors.primary};
	}

	button {
		height: 100%;
		width: 25px;

		display: flex;
		align-items: center;
		justify-content: center;

		background: ${props => props.theme.colors.primary};
		cursor: pointer;

		:hover {
			background: ${props => props.theme.colors.info};
		}
	}
`;
