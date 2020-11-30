import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Swifts = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "swifts.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a href="https://www.portlandswiftsultimate.com">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="The Portland Swifts Logo and Wordmark"
      />
    </a>
  )
}

export default Swifts
