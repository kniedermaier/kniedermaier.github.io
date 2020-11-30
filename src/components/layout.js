import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { rem } from 'polished'
import { GlobalStyle } from './globalStyle'
import Header from './header'

const StyledMain = styled.main`
  max-width: ${({ width }) => (width ? 600 : 500)}px;
  margin: 0 auto;
  padding: ${rem(16)};

  @media (min-width: 600px) {
    padding: ${rem(32)};
  }
`

const Layout = ({ children, width }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledMain width={width}>{children}</StyledMain>
    </Fragment>
  )
}

export default Layout
