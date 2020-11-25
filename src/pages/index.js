import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StyledHeading } from '../components/header'
import Donut from '../components/images/donut'
import Globe from '../components/images/globe'
import Map from '../components/images/map'

const StyledTitle = styled(StyledHeading)`
  margin: 1rem 0 0.5rem 0;
`

const StyledContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
  img {
    border: 1px solid #888888;
    max-width: 200px;
  }
  .gatsby-image-wrapper {
    overflow: initial !important;
    max-width: 200px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="🏡" />
    <p>
      I work as a software engineer at{' '}
      <a href="https://www.bravecare.com">Brave Care</a>, helping to build
      technology that supports multiple pediatric clinics and tools used by
      families across the U.S. Previously, I worked at{` `}
      <a href="https://secure.actblue.com">ActBlue</a>, an online fundraising
      platform, focusing on improving the donation experience with a combination
      of product knowledge, hypothesis testing, and technical skills. I also
      enjoy visualizing data and riding bicycles. Feel free to get in touch by
      {` `}
      <a
        href="mailto:hello@kimniedermaier.com?subject=Hi"
        target="_blank"
        rel="noopener noreferrer"
      >
        email
      </a>
      .
    </p>
    <StyledTitle as="h2" id="work">
      Work
    </StyledTitle>
    <StyledContainer>
      <Donut />
      <Globe />
      <Map />
    </StyledContainer>
    <StyledTitle as="h2">
      <Link to="/talks">Talks</Link>
    </StyledTitle>
    <ul>
      <li>
        <Link to="/talks/donut-js">
          Design, data, and D3.js: a primer on making clear graphics
        </Link>{' '}
        (November 2017 at <a href="http://donutjs.club">Donut.js</a>)
      </li>
    </ul>
  </Layout>
)

export default IndexPage
