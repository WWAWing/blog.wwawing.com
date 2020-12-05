import { Link } from "gatsby"
import React from "react"

import { rhythm } from "../utils/typography"

interface Props {
  slug: string,
  title: string,
  date: string,
  description: string,
}

const PostItem: React.FC<Props> = ({ slug, title, date, description }) => {
  return (
    <article>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4)
          }}
        >
          <Link style={{ boxShadow: `none` }} to={slug}>
            {title}
          </Link>
        </h3>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: description || "",
          }}
        />
      </section>
    </article>
  )
}

export default PostItem
