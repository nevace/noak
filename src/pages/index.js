import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

const IndexPage = () => {
	return (
		<IndexStyled>
			<h1>noak & co</h1>
			{/*<SEO title="Home" />*/}
		</IndexStyled>
	);
};

export const IndexStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	background-color: #02b69c;
	font-size: 30px;
	color: #fff;
`;

export default IndexPage;
