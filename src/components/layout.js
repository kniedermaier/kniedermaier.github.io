import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "./globalStyle"
import Header from "./header"

const StyledMain = styled.main`
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
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
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledMain>{children}</StyledMain>
    </>
  )
}

export default Layout
