import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Donut = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "donut.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a href="https://report.actblue.com/2016/">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="A pie chart representing percentages of a whole"
      />
    </a>
  )
}

export default Donut
