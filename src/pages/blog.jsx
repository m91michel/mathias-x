import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PostTile from "../components/post-tile"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout title="Latest Posts">
        <SEO title="Blog" />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
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
            )
          })}
        </div>
        <Bio />
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
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
`
