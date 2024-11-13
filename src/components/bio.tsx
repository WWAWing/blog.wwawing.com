/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio: React.FC = () => {
  const data: Queries.BioQueryQuery = useStaticQuery<Queries.BioQueryQuery>(graphql`
    query BioQuery {
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
      <div style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
      }}>
        <StaticImage
          src="../../content/assets/profile-pic.png"
          alt={author.name}
          width={50}
          height={50}
        />
      </div>
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
