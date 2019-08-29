import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import "./mystyles.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faXing,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const socialButtons = [
  {
    id: "twitter",
    icon: faTwitter,
    baseUrl: "https://twitter.com/",
  },
  {
    id: "github",
    icon: faGithub,
    baseUrl: "https://github.com/",
  },
  {
    id: "xing",
    icon: faXing,
    baseUrl: "https://xing.com/",
  },
  {
    id: "linkedIn",
    icon: faLinkedin,
    baseUrl: "https://linkedin.com/",
  },
]

class IndexPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={indexQuery}
        render={data => {
          const { author, social, bio } = data.site.siteMetadata
          return (
            <Layout>
              <SEO
                title="Home"
                keywords={[
                  `Mathias Michel`,
                  `Developer`,
                  `Entwickler`,
                  `blog`,
                  `gatsby`,
                  `javascript`,
                  `react`,
                ]}
              />
              <section className="hero">
                <div className="hero-body">
                  <div className="container">
                    <div className="media-content">
                      <div className="content has-text-centered">
                        <Image
                          fixed={data.avatar.childImageSharp.fixed}
                          alt={author}
                          imgStyle={{
                            borderRadius: `50%`,
                          }}
                        />
                        <h1 className="is-uppercase is-size-2">{author}</h1>
                        <p>{bio}</p>
                        <div>
                          {socialButtons.map(socialItem => (
                            <a
                              key={socialItem.id}
                              href={social[socialItem.id]}
                            >
                              <span className="icon social-button">
                                <FontAwesomeIcon
                                  icon={socialItem.icon}
                                  size="1x"
                                />
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
          )
        }}
      />
    )
  }
}

const indexQuery = graphql`
  query IndexQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 170, height: 170) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        bio
        social {
          twitter
          github
          xing
          linkedIn
        }
      }
    }
  }
`

export default IndexPage
