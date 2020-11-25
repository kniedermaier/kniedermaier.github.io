import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { StyledHeading } from '../../components/header'
import Donut from '../../components/images/donut'
import Globe from '../../components/images/globe'
import Map from '../../components/images/map'
import SaferLink from '../../components/saferLink'

const StyledContainer = styled.div`
  margin: ${rem(16)} 0 0 0;
  display: grid;
  grid-gap: ${rem(16)};
  @media (min-width: 400px) {
    grid-template-columns: 200px auto;
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

const StyledMediumTitle = styled(StyledHeading)`
  margin: ${rem(24)} 0 0 0;
  font-family: Garamond, Georgia, serif;
  text-transform: none;
  font-style: italic;
  font-size: ${rem(24)};
`

const StyledUlTitle = styled.p`
  margin: ${rem(8)} 0;
`

const WorkIndexPage = () => (
  <Layout width="wide">
    <SEO title="💻" />
    <StyledHeading as="h2">Work</StyledHeading>
    <StyledMediumTitle as="h3">ActBlue 2016 Report</StyledMediumTitle>
    <StyledContainer>
      <Donut />
      <div>
        <p>
          Worked with other members of the ActBlue marketing team as the lead
          developer to build this website summarizing the year's
          accomplishments.
        </p>
        <StyledUlTitle>Featuring:</StyledUlTitle>
        <ul>
          <li>D3.js visualizations</li>
          <li>Bespoke SVG animations</li>
        </ul>
      </div>
    </StyledContainer>
    <StyledMediumTitle as="h3">ECHO — Parallel Lives</StyledMediumTitle>
    <StyledContainer>
      <Globe />
      <div>
        <p>
          Teamed up with another software developer to make this website, which
          showcases some incredibly moving videography from the team at{` `}
          <SaferLink href="http://www.documist.com">Documist</SaferLink>.
        </p>
        <StyledUlTitle>
          Image- and video-intensive website built with:
        </StyledUlTitle>
        <ul>
          <li>Middleman</li>
          <li>D3.js</li>
          <li>ScrollMagic</li>
        </ul>
      </div>
    </StyledContainer>
    <StyledMediumTitle as="h3">ActBlue 2015 Report</StyledMediumTitle>
    <StyledContainer>
      <Map />
      <div>
        <p>
          Collaborated with other members of the ActBlue digital team to design
          and create this marketing site.
        </p>
        <StyledUlTitle>Includes:</StyledUlTitle>
        <ul>
          <li>A mix of static and dynamic D3.js visualizations</li>
          <li>ScrollMagic</li>
          <li>Thousands of lines of SVG</li>
        </ul>
      </div>
    </StyledContainer>
  </Layout>
)

export default WorkIndexPage
