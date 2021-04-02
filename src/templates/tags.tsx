import React from "react";
import { graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import PostTile from "../components/post-tile";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: Post;
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    tag: string;
  }
}

const Blog: React.FC<Props> = ({ data, pageContext: { tag }, ...other }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node);
  const title = `Posts for #${tag}`;

  return (
    <Layout title={title}>
      <SEO title={title} />
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map((post: Post) => {
          const title = post.frontmatter?.title || post.fields?.slug;
          return (
            <PostTile
              key={post.fields?.slug}
              title={title}
              link={`/blog${post.fields?.slug}`}
              date={post.frontmatter?.date}
              timeToRead={post.timeToRead}
            />
          );
        })}
      </div>
      <Bio />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
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
