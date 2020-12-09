import React from "react"
import Image, { GatsbyImageProps } from "gatsby-image"

import { rhythm } from "../../utils/typography"

interface Props {
    description: string,
    image: GatsbyImageProps["fluid"]
}

const PostItemExcerpt: React.FC<Props> = ({ description, image }) => {
    const excerpt = (
        <p
            dangerouslySetInnerHTML={{
                __html: description || "",
            }}
        />
    )
    const imageMinWidth = 300

    if (image) {
        // INFO: rhythm(0.7) は typography.js の p の余白からきている
        return (
            <>
                <div style={{
                    float: `right`,
                    marginBottom: rhythm(0.7),
                }}>
                    <Image
                        fluid={image}
                        alt={``}
                        style={{ minWidth: imageMinWidth }}
                    />
                </div>
                {excerpt}
                <div style={{ clear: `right` }} />
            </>
        )
    }

    return (
        <>
            {excerpt}
        </>
    )
}

export default PostItemExcerpt
