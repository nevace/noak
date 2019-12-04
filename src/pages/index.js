import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet"

const IndexPage = () => {
	return (
		<IndexStyled>
			<Helmet>
				<meta charSet="utf-8" />
				<title>noak &amp; co | Helping companies to deliver leading products</title>
				<description>Challenger consultancy, helping companies deliver products whilst up skilling employees to provide long term value.</description>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
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
