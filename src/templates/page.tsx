import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: Frontmatter;
    }
  }
}

const PageTemplate: React.FC<Props> = (props) => {
    const page = props.data.markdownRemark

    return (
      <Layout title={page.frontmatter.title}>
        <SEO
          title={page.frontmatter.title}
          description={page.frontmatter.description || ''}
        />
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </Layout>
    )
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
