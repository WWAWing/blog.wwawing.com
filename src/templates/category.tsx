import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bio from "../components/bio";
import PostItem from "../components/postItem";

interface Props {
  data: GatsbyTypes.CategoryPageQueryQuery,
  pageContext: {
    category: string,
  }
  location: string,
}

const CategoryPageTemplate: React.FC<Props> = ({ data, pageContext, location }) => {
  const title = `カテゴリ「${pageContext.category}」のページ一覧`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <Bio />
      {posts.map(page => <PostItem
        slug={page.fields.slug}
        title={page.frontmatter.title}
        date={""}
        description={page.frontmatter.description || page.excerpt}
      />)}
    </Layout>
  )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
  query CategoryPageQuery($category: String!) {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: $category}}}) {
      nodes {
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
          }
        }
      }
    }
  }
`
