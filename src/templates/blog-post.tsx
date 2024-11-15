import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { BlogPostNode } from "../../gatsby-node/create-pages"
import getCategoryUrl from "../utils/getCategoryUrl"
import Share from "../components/share"

interface Props {
  data: Queries.BlogPostBySlugQuery,
  pageContext: {
    slug: string,
    previous: BlogPostNode,
    next: BlogPostNode,
  },
  location: string,
}

const BlogPostTemplate: React.FC<Props> = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site?.siteMetadata?.title
  const { slug, previous, next } = pageContext

  if (post === undefined || post.frontmatter === undefined) {
    return (
      <Layout location={location} title={siteTitle}>
        <h1>お探しの記事は見つかりませんでした。</h1>
        <p>もしかしたら、投稿が正しく取得されなかったかもしれません。管理者の方は、投稿内容をご確認ください。</p>
      </Layout>
    )
  }

  const subtitleStyle = {
    ...scale(-1 / 7.5),
    display: `block`,
    marginTop: 0,
    marginBottom: 0,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image?.publicURL}
      />
      <article>
        <header
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1)
          }}
        >
          <p style={subtitleStyle}>
            <Link to={getCategoryUrl(post.frontmatter.category)} rel="category">
              {post.frontmatter.category}
            </Link>
          </p>
          <h1
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p style={subtitleStyle}>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Share publicUrl={slug} />
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
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
        image {
          publicURL
        }
        category
      }
    }
  }
`
