// @flow

import type { Node } from 'react';

import React from 'react';
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
import Caption from '../components/typography/Caption';
import Link from '../components/link';
import Image from '../components/images/Image';

const renderPosts = ({ frontmatter, id, excerpt }) => {
  const { topic, image, title, path } = frontmatter;
  return (
    <Link
      key={id}
      withTextDecoration={false}
      to={path}
    >
      <Articles>
        {topic && <Topic>{topic}</Topic>}
        {image && <Image src={image}/>}
        <ArticleSummary>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleBody><div dangerouslySetInnerHTML={{ __html: excerpt }}/></ArticleBody>
        </ArticleSummary>
      </Articles>
    </Link>
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
      <Image
        src="https://images.unsplash.com/photo-1421882402971-b18cd1741ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80"
        url="https://unsplash.com/photos/gm3bxHin8VA"
        caption="Photo By Daria Nepriakhina"
        captionUrl="https://unsplash.com/@epicantus"
      />
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
