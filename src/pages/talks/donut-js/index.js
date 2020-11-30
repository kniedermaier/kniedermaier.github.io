import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import { StyledHeading } from '../../../components/header'
import SaferLink from '../../../components/saferLink'

const StyledTitle = styled(StyledHeading)`
  margin: 0;
  font-family: Garamond, Georgia, serif;
  text-transform: none;
  font-style: italic;
`

const StyledSection = styled.section`
  margin-top: 1.25rem;
`

const StyledListItem = styled.li`
  margin-top: 0.5rem;
`

const DonutJsIndexPage = () => (
  <Layout width="wide">
    <SEO title="🍩" />
    <StyledTitle as="h1">Data, design, and D3.js:</StyledTitle>
    <StyledTitle as="h2">a primer on making clear graphics</StyledTitle>
    <StyledSection>
      <StyledTitle as="h2">Slides</StyledTitle>
      <ul>
        <StyledListItem>
          <a href="../../../donut-js/slides/#0">HTML</a>
        </StyledListItem>
        <StyledListItem>
          <a href="../../../donut-js/assets/slides.pdf">PDF</a>
        </StyledListItem>
      </ul>
    </StyledSection>
    <StyledSection>
      <StyledTitle as="h2">Video</StyledTitle>
      <ul>
        <StyledListItem>
          <SaferLink href="https://www.youtube.com/watch?v=Pw-8GN6eO_E">
            YouTube
          </SaferLink>
        </StyledListItem>
      </ul>
    </StyledSection>
    <StyledSection>
      <StyledTitle as="h2">Cited examples</StyledTitle>
      <ul>
        <StyledListItem>
          NPR:{' '}
          <SaferLink href="https://www.npr.org/2016/05/01/476224759/is-there-a-better-way-to-pay-for-americas-schools">
            Is there a better way to pay for America's schools?
          </SaferLink>
        </StyledListItem>
        <StyledListItem>
          The New York Times:{' '}
          <SaferLink href="https://www.nytimes.com/interactive/2016/02/19/us/2015-year-in-weather-temperature-precipitation.html">
            How much warmer was your city in 2015?
          </SaferLink>
        </StyledListItem>
        <StyledListItem>
          FiveThirtyEight:{' '}
          <SaferLink href="https://fivethirtyeight.com/features/where-your-state-gets-its-money/">
            Where your state gets its money
          </SaferLink>
        </StyledListItem>
      </ul>
    </StyledSection>
    <StyledSection>
      <StyledTitle as="h2">Additional resources</StyledTitle>
      <ul>
        <StyledListItem>
          Leland Wilkinson:{' '}
          <SaferLink href="http://www.springer.com/us/book/9780387245447">
            The Grammar of Graphics
          </SaferLink>
        </StyledListItem>
        <StyledListItem>
          Dona M. Wong:{' '}
          <SaferLink href="http://books.wwnorton.com/books/The-Wall-Street-Journal-Guide-to-Information-Graphics/">
            The Wall Street Journal Guide to Information Graphics: The Dos and
            Don'ts of Presenting Data, Facts, and Figures
          </SaferLink>
        </StyledListItem>
        <StyledListItem>
          Edward Tufte:{' '}
          <SaferLink href="https://www.edwardtufte.com/tufte/books_vdqi">
            The Visual Display of Quantitative Information
          </SaferLink>
        </StyledListItem>
        <StyledListItem>
          Alberto Cairo:{' '}
          <SaferLink href="http://www.thefunctionalart.com/p/the-truthful-art-book.html">
            The Truthful Art
          </SaferLink>
        </StyledListItem>
        <StyledListItem>
          Scott Murray:{' '}
          <SaferLink href="http://alignedleft.com/work/d3-book-2e">
            Interactive Data Visualization for the Web
          </SaferLink>
        </StyledListItem>
        <StyledListItem>
          Nadieh Bremer:{' '}
          <SaferLink href="https://www.visualcinnamon.com/resources/learning-data-visualization">
            D3.js tutorials and more
          </SaferLink>
        </StyledListItem>
        <StyledListItem>
          Lena Groeger:{' '}
          <SaferLink href="http://lenagroeger.s3.amazonaws.com/nyu/nyu-data.html#/">
            Visualizing Data
          </SaferLink>
        </StyledListItem>
      </ul>
    </StyledSection>
  </Layout>
)

export default DonutJsIndexPage
