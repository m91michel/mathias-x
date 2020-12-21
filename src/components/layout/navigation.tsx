import React, { useState } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const NavLinks = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog/" },
  { name: "About", to: "/about/" },
  { name: "Projects", to: "/projects/" },
  { name: "Contact", to: "/contact/" },
];

const Navigation: React.FC = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;

        return (
          <div className="hero-head">
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="container">
                <div className="navbar-brand">
                  <Link className="navbar-item" to={`/`}>
                    <Image
                      fixed={data.logo.childImageSharp.fixed}
                      // objectFit="scale-down"
                      alt={"Logo" + author}
                    />
                    <h3
                      className="has-text-weight-bold"
                      style={{ marginLeft: `5px` }}
                    >
                      {author}
                    </h3>
                  </Link>
                  <button
                    className={`navbar-burger unset-button burger ${
                      isExpanded ? `is-active` : ``
                    }`}
                    data-target="navbarMenuHeroB"
                    onClick={() => toggleExpansion(!isExpanded)}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>

                <div
                  id="navbarBasicExample"
                  className={`navbar-menu ${isExpanded ? `is-active` : ``}`}
                >
                  <div className="navbar-end">
                    {NavLinks.map((item) => (
                      <Link
                        key={item.name}
                        className="navbar-item"
                        to={item.to}
                        activeClassName="is-active"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        );
      }}
    />
  );
};

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
`;
export default Navigation;
