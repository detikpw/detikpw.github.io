// @flow

import type { Node } from 'react';

import React from 'react';
import { Image } from 'rebass';
import { graphql } from "gatsby";
import { map, prop } from 'ramda';
import Mobile from '../components/devices/Mobile';
import Layout from '../components/layout';
import HeaderSection from '../components/layout/pages/HeaderSection';
import Body from '../components/layout/pages/Body';
import Articles from '../components/layout/pages/Articles';
import ArticleSummary from '../components/layout/pages/ArticleSummary';
import PageHeader from '../components/typography/PageHeader';
import Topic from '../components/typography/Topic';
import ArticleTitle from '../components/typography/ArticleTitle';
import ArticleBody from '../components/typography/ArticleBody';
import Link from '../components/link';

const renderPosts = ({ frontmatter, id, excerpt }) => {
  const { topic, image, title, path } = frontmatter;
  return (
    <Articles key={id}>
      {topic && <Topic>{topic}</Topic>}
      {image && <Image src={image}/>}
      <ArticleSummary>
        <Link
          withTextDecoration={false}
          to={path}
        >
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleBody><div dangerouslySetInnerHTML={{ __html: excerpt }}/></ArticleBody>
        </Link>
      </ArticleSummary>
    </Articles>
  );
}
export default ({
    data: {
      allMarkdownRemark: { edges },
    },
}): Node => {
  const posts = map(prop('node'), edges)
  return (
    <Layout>
      <Body>
        <HeaderSection>
          <PageHeader>
            Terbaru
          </PageHeader>
        </HeaderSection>
        {posts.map(renderPosts)}
      </Body>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
          html
        }
      }
    }
  }
`
