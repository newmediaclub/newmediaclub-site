import React from 'react'
import Link from 'gatsby-link'

const Posts = ({data}) => (
  <div>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id}>
          <Link
            to={post.node.frontmatter.path}
          >
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Posts
