/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <article className="media">
              <figure className="media-left">
                <div className="image is-64x64">
                  <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author}
                    imgStyle={{
                      borderRadius: `50%`,
                    }}
                  />
                </div>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    Written by <strong>{author}</strong> who lives and works in
                    Munich building useful things.
                    {` `}
                    <a href={`${social.twitter}`} target="_blank">
                      Follow me on Twitter
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
`

export default Bio
