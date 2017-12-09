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

export const pageQuery = graphql`
  query IndexQuery { allMarkdownRemark(
    limit: 10,
    sort: { fields:[ frontmatter___date], order: ASC }
    filter:{ frontmatter: { published: { eq: true } } }
  ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
            date
          }
        }
      }
    }
  }
`;
