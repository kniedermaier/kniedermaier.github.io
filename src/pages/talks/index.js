import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { StyledHeading } from "../../components/header"

const StyledTitle = styled(StyledHeading)`
  margin: 1rem 0 0.5rem 0;
`;

const TalksIndexPage = () => (
  <Layout>
    <SEO title="🗣" />
    <StyledTitle as="h2">
      Talks
    </StyledTitle>
    <ul>
      <li>
        <Link to="./talks/donut-js">Design, data, and D3.js: a primer on making clear graphics</Link> (November 2017 at <a href="http://donutjs.club">Donut.js</a>)
      </li>
    </ul>
  </Layout>
)

export default TalksIndexPage
