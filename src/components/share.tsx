import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FacebookIcon, FacebookShareButton, HatenaIcon, HatenaShareButton, LineIcon, LineShareButton, PocketIcon, PocketShareButton, TwitterIcon, TwitterShareButton } from "react-share"

import { rhythm } from "../utils/typography"

interface Props {
  publicUrl: string
}

/**
 * シェアボタンのコンポーネントです。
 * @param url 
 */
const Share: React.FC<Props> = ({ publicUrl }) => {
  const data = useStaticQuery<GatsbyTypes.ShareQueryQuery>(graphql`
    query ShareQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const pageUrl = `${data.site.siteMetadata.siteUrl}${publicUrl}`
  const size = 40

  return (
    <div
      style={{
        marginBottom: rhythm(1),
        display: `flex`,
        flexFlow: `row nowrap`,
        justifyContent: `space-around`
      }}
    >
      <TwitterShareButton url={pageUrl}>
        <TwitterIcon size={size} />
      </TwitterShareButton>
      <FacebookShareButton url={pageUrl}>
        <FacebookIcon size={size} />
      </FacebookShareButton>
      <PocketShareButton url={pageUrl}>
        <PocketIcon size={size} />
      </PocketShareButton>
      <HatenaShareButton url={pageUrl}>
        <HatenaIcon size={size} />
      </HatenaShareButton>
      <LineShareButton url={pageUrl}>
        <LineIcon size={size} />
      </LineShareButton>
    </div>
  )
}

export default Share
