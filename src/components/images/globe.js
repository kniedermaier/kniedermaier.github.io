import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Globe = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "globe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a href="https://parallellives.huffpost.com">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="A map of the Northeastern African continent"
      />
    </a>
  )
}

export default Globe
