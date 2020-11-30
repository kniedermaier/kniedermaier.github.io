import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StyledHeading } from '../components/header'
import Donut from '../components/images/donut'
import Globe from '../components/images/globe'
import Map from '../components/images/map'
import Swifts from '../components/images/swifts'

const StyledTitle = styled(StyledHeading)`
  margin: 2rem 0 0.5rem 0;
`

const StyledContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
  }
  img {
    border: 1px solid #888888;
  }
  .gatsby-image-wrapper {
    overflow: initial !important;
  }
`

const Paragraph = styled.p`
  ${({ extraTopPadding }) => extraTopPadding && 'padding-top: 1rem;'}
`

const IndexPage = () => (
  <Layout>
    <SEO title="🏡" />
    <Paragraph>
      I currently work as a software engineer at{' '}
      <a href="https://www.bravecare.com">Brave Care</a>, helping to build
      technology that supports multiple pediatric clinics and tools used by
      families across the U.S.
    </Paragraph>
    <Paragraph extraTopPadding>
      Previously, I worked at{` `}
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
    </Paragraph>
    <StyledTitle as="h2" id="work">
      <Link to="/work">Work</Link>
    </StyledTitle>
    <StyledContainer>
      <Swifts />
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
