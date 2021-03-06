import path from 'path'
import { GatsbyNode } from 'gatsby'
import getCategoryUrl from '../src/utils/getCategoryUrl'

/**
 * @todo BlogPostsQuery は graphql-types.ts から読み取ることも可能ですが、 createPage の段階で型が合いません
 */
type BlogPostsQuery = {
  allMarkdownRemark: {
    edges: {
      node: BlogPostNode
    }[],
    allCategories: string[]
  }
}

export type BlogPostNode = {
  fields: {
    slug: string
  },
  frontmatter: {
    title: string
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const categoryPage = path.resolve(`./src/templates/category.tsx`)
  const result = await graphql<BlogPostsQuery>(
    `
      query BlogPosts {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
          allCategories: distinct(field: frontmatter___category)
        }
      }
    `
  )

  if (result.errors || result.data === undefined) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create category pages.
  const categories = result.data.allMarkdownRemark.allCategories

  categories.forEach((category) => {
    createPage({
      path: getCategoryUrl(category),
      component: categoryPage,
      context: {
        category
      },
    })
  })

}
