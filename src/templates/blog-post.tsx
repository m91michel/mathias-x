import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

interface Props {
  data: {
    markdownRemark: {
      id: string;
      excerpt: string;
      html: string;
      frontmatter: Frontmatter;
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: any;
}
const BlogPostTemplate: React.FC<Props> = (props) => {
  const post = props.data.markdownRemark;
  const { previous, next } = props.pageContext;
  const subtitle = post.frontmatter.date;

  return (
    <Layout title={post.frontmatter.title} subtitle={subtitle} tags={post.frontmatter.tags}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} keywords={post.frontmatter.keywords} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="my-5">
        <ul className="flex flex-wrap list-none p-0 ml-0 justify-between" style={{ listStyle: `none` }}>
          <li className="flex-1 w-full">
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="flex-1 w-full mt-0 text-right">
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
      <hr style={{ height: "1px" }} className="mb-4" />
      <Bio />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
        tags
      }
    }
  }
`;
