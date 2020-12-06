/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string,
  image?: string,
  lang?: string,
  meta?: any, // FIXME: react-helment の meta プロパティに concat できる型が見つからない
  title: string,
}

const SEO: React.FC<Props> = ({ description, image, lang, meta, title }) => {
  const { site, defaultOgpImage } = useStaticQuery<GatsbyTypes.SEOMetadataQueryQuery>(
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
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImageUrl
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImageUrl
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
  image: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
