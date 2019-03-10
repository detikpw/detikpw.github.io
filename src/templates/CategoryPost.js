// @flow

import type { Node } from 'react';

import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from "gatsby";
import { map, prop } from 'ramda';
import { sentence } from 'change-case';
import PostList from '../components/layout/pages/PostList';
export default ({
    pageContext: { category },
    data: {
      allMarkdownRemark: { edges },
    },
}): Node => {
  const posts = map(prop('node'), edges)
  const pageTitle = sentence(category);
  return (
    <>
      <PostList posts={posts} pageTitle={pageTitle} />
      <Helmet>
        <title>{pageTitle}</title>
        {/* TODO Description and reusable Helmet */}
      </Helmet>
    </>
  )
}

export const pageQuery = graphql`
  query($category: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: {
        category: { eq: $category }
      } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              src
              caption
              captionUrl
            }
          }
          fields {
            path
          }
          html
        }
      }
    }
  }
`
