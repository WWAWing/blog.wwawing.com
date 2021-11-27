/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio: React.FC = () => {
  const data: GatsbyTypes.BioQueryQuery = useStaticQuery<GatsbyTypes.BioQueryQuery>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <p
          style={{
            marginBottom: rhythm(0.5),
          }}
        >
          {author.summary}
        </p>
        <ul
          style={{
            marginTop: rhythm(0.5),
          }}
        >
          <li>
            <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopenner noreferrer">
              必要であれば Twitter アカウントもフォローしましょう。
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Bio
