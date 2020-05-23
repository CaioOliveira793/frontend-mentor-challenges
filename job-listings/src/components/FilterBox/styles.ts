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
		color: #7b8e8e;
		font-size: 1.3rem;
		font-weight: bold;

		:hover {
			color: #5ba4a4;
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
	background: #eef6f6;

	span {
		padding: 5px;
		font-size: 1.3rem;
		font-weight: bold;
		color: #5ba4a4;
	}

	button {
		height: 100%;
		width: 25px;

		display: flex;
		align-items: center;
		justify-content: center;

		background: #5ba4a4;
		cursor: pointer;

		:hover {
			background: #2c3a3a;
		}
	}
`;

// Primary:
// - Desaturated Dark Cyan: #5ba4a4

// Neutral:
// - Light Grayish Cyan (Background): #effafa
// - Light Grayish Cyan (Filter Tablets): #eef6f6
// - Dark Grayish Cyan: #7b8e8e
// - Very Dark Grayish Cyan: #2c3a3a
