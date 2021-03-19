import React from "react";
// import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Bio from "../components/bio";

interface Props {
  data: {
    allMarkdownRemark: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const TagsPage: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout title="All tags">
    <SEO title="All tags" />
    <div style={{ margin: "20px 0 40px" }}>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Bio />
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
