/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

type Props = {
  children: ReactNode;
};
const Container: React.FC<Props> = ({ children }) => <div className="flex max-w-screen-sm mx-auto my-0">{children}</div>;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
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
                    Written by <strong>{author}</strong> who lives and works in Munich building useful things.
                    {` `}
                    <a href={`${social.twitter}`} target="_blank" rel="noopener noreferrer">
                      Follow me on Twitter
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </Container>
        );
      }}
    />
  );
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
`;

export default Bio;
