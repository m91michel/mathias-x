import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PostTile from "../post-tile";
const titleStyle = {
  marginTop: "2em",
};
function LatestPosts() {
  return (
    <StaticQuery
      query={latestPostQuery}
      render={(data) => {
        const posts = data.allMarkdownRemark.edges;

        return (
          <section className="container content">
            <div className="has-text-centered" style={titleStyle}>
              <h1 className="title">Latest posts</h1>
            </div>
            <div style={{ margin: "20px 0 40px" }}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <PostTile
                    key={node.fields.slug}
                    title={title}
                    link={`/blog${node.fields.slug}`}
                    description={node.frontmatter.description}
                    excerpt={node.excerpt}
                    date={node.frontmatter.date}
                    timeToRead={node.timeToRead}
                  />
                );
              })}
            </div>
          </section>
        );
      }}
    />
  );
}

export const latestPostQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

export default LatestPosts;
