import React from "react"
import { GatsbyImageProps } from "gatsby-image"

import PostItemContainer from "./container"
import PostItemExcerpt from "./excerpt"

interface Props {
  slug: string,
  title: string,
  date: string,
  description: string,
  category?: string,
  image?: GatsbyImageProps["fluid"]
}

const PostItem: React.FC<Props> = ({ slug, title, date, description, category, image }) => {
  return (
    <PostItemContainer
      slug={slug}
      title={title}
      date={date}
      category={category}
    >
      <PostItemExcerpt description={description} image={image} />
    </PostItemContainer>
  )
}

export default PostItem
