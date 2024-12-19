import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bio from "../components/bio";
import PostItem from "../components/postItem/index";

interface Props {
  data: Queries.CategoryPageQueryQuery,
  pageContext: {
    category: string,
  }
  location: string,
}

const CategoryPageTemplate: React.FC<Props> = ({ data, pageContext, location }) => {
  const title = `カテゴリ「${pageContext.category}」のページ一覧`
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter?.title || node.fields?.slug
        const description = node.frontmatter.description || node.excerpt;
        return <PostItem
          key={node.fields.slug}
          slug={node.fields.slug}
          title={title}
          date={node.frontmatter.date}
          description={description}
          image={node.frontmatter.image?.childImageSharp?.gatsbyImageData}
        />
      })}
    </Layout>
  )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
  query CategoryPageQuery($category: String!) {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: $category}}}) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              publicURL
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
