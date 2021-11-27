import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import { rhythm } from "../../utils/typography"

interface Props {
    description: string,
    image: IGatsbyImageData
}

const PostItemExcerpt: React.FC<Props> = ({ description, image }) => {
    const excerpt = (
        <p
            dangerouslySetInnerHTML={{
                __html: description || "",
            }}
        />
    )

    if (image) {
        const imageMinWidth = 300
        // INFO: rhythm(0.7) は typography.js の p の余白からきている
        const imageMargin = rhythm(0.7)
        return (
            <div style={{
                display: `flex`,
                flexFlow: `row-reverse wrap`,
                justifyContent: `center`,
                margin: `${imageMargin} 0 0`,
            }}>
                <div style={{ flex: `0 1 ${imageMinWidth}px` }}>
                    <GatsbyImage
                        image={image}
                        alt={``}
                        style={{
                            margin: `0 ${imageMargin} ${imageMargin}`,
                            minWidth: imageMinWidth,
                        }}
                    />
                </div>
                <div style={{ flex: `1 0 0` }}>
                    {excerpt}
                </div>
            </div>
        )
    }

    return (
        <>
            {excerpt}
        </>
    )
}

export default PostItemExcerpt
