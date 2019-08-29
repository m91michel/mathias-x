import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const NavLinks = [
    {name: 'Home', to: '/'},
    {name: 'Blog', to: '/blog/'},
    {name: 'About', to: '/about/'},
    {name: 'Contact', to: '/contact/'},
]

const Navigation = () => {
  return (
    <StaticQuery
      query={navQuery}
      render={data => {
        const { author } = data.site.siteMetadata

        return (
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to={`/`}>
                <Image
                  fixed={data.logo.childImageSharp.fixed}
                  objectFit="scale-down"
                  alt={"Logo" + author}
                />
                <h1 style={{ marginLeft: `5px` }}>{author}</h1>
              </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                  {NavLinks.map(item => (
                      <Link key={item.name} className="navbar-item" to={item.to}>
                      {item.name}
                    </Link>
                  ))}
              </div>
            </div>
          </nav>
        )
      }}
    />
  )
}

const navQuery = graphql`
  query NavQuery {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 25, height: 25) {
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
export default Navigation
