/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string,
  image?: string,
  lang?: string,
  meta?: any, // FIXME: react-helment の meta プロパティに concat できる型が見つからない
  title: string,
}

const SEO: React.FC<Props> = ({ description, image, title }) => {
  const { site, defaultOgpImage } = useStaticQuery<Queries.SEOMetadataQueryQuery>(
    graphql`
      query SEOMetadataQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
        defaultOgpImage: file(absolutePath: { regex: "/default-ogp-image.png/" }) {
          publicURL
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImageUrl = image
    ? `${site.siteMetadata.siteUrl}${image}`
    : `${site.siteMetadata.siteUrl}${defaultOgpImage.publicURL}`

  return (
    <>
      <title>{title} | {site.siteMetadata.title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageUrl} />
    </>
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
  image: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
