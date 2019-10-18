import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { StyledHeading } from "../../components/header"

const TalksIndexPage = () => (
  <Layout>
    <SEO title="🗣" />
    <StyledHeading as="h2">
      Talks
    </StyledHeading>
    <ul>
      <li>
        <Link to="/talks/donut-js">Design, data, and D3.js: a primer on making clear graphics</Link> (November 2017 at <a href="http://donutjs.club">Donut.js</a>)
      </li>
    </ul>
  </Layout>
)

export default TalksIndexPage
