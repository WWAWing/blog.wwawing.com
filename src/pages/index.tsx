import React from "react"
import { PageProps, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/postItem"

const BlogIndex: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata?.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter?.title || node.fields?.slug
        const description = node.frontmatter.description || node.excerpt
        return <PostItem
          slug={node.fields.slug}
          title={title}
          date={node.frontmatter.date}
          description={description}
          category={node.frontmatter.category}
        />
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
          }
        }
      }
    }
  }
`
