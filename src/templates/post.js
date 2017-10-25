import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <div>
      <h1>
        {post.frontmatter.title}
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </h1>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
