import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Map = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "map.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a href="https://report.actblue.com/2015/">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="A map of the Eastern United States"
      />
    </a>
  )
}

export default Map
