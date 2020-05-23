import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;

	width: 100%;
	padding: 15px;
	margin-bottom: 20px;
	border-radius: 3px;
	border-left: #fff solid 4px;

	background: #fff;

	:hover {
		border-left: #5ba4a4 solid 4px;
	}

	@media (max-width: 500px) {
		flex-flow: row wrap;
	}

	@media (max-width: 375px) {
		position: relative;
		flex-flow: column nowrap;

		margin-bottom: 40px;
	}
`;

export const Logo = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;

	flex: 0 0 90px;
	width: 90px;
	height: 90px;
	margin-right: 20px;

	@media (max-width: 500px) {
		flex: 0 0 70px;
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
		margin-right: 15px;
	}

	@media (max-width: 375px) {
		position: absolute;
		top: -30px;
		flex: 0 0 50px;
		width: 50px;
		height: 50px;
	}
`;

export const JobInfos = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: center;

	flex-grow: 0;
	flex-shrink: 0;

	> div {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		justify-content: flex-start;
	}

	@media (max-width: 500px) {
		margin-bottom: 10px;
	}

	@media (max-width: 375px) {
		margin-top: 20px;
		padding-bottom: 15px;

		border-bottom: #aaa solid 1px;
	}
`;

export const Company = styled.strong`
	margin-right: 13px;
	font-size: 1.4rem;
	font-weight: bold;

	color: #5ba4a4;
`;

export const Title = styled.strong`
	margin: 12px 0px;
	font-size: 1.6rem;
	font-weight: bold;
	cursor: pointer;

	color: #2c3a3a;

	:hover {
		color: #5ba4a4;
	}
`;

export const Status = styled.span`
	padding: 5px 7px;
	border-radius: 12px;
	margin-right: 8px;
	font-size: 1.2rem;
	font-weight: bold;

	color: #fff;

	:nth-child(2) {
		background: #5ba4a4;
	}

	:nth-child(3) {
		background: #2c3a3a;
	}
`;

export const Info = styled.span`
	margin-right: 8px;
	font-size: 1.4rem;

	color: #7b8e8e;
`;

export const TagList = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-end;

	flex-grow: 2;
	flex-shrink: 2;

	@media (max-width: 500px) {
		justify-content: flex-start;
	}
`;

export const Tag = styled.button`
	padding: 5px;
	margin-left: 10px;
	margin-bottom: 10px;
	font-size: 1.2rem;
	font-weight: bold;
	cursor: pointer;

	color: #5ba4a4;
	background: #effafa;

	:hover {
		color: #fff;
		background: #5ba4a4;
	}

	@media (max-width: 500px) {
		margin-left: 0;
		margin-right: 10px;
	}
`;
