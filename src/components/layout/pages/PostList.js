import type { Node } from 'react';

import React from 'react';
import { Flex } from 'rebass';
import { prop } from 'ramda';
import Layout from '../../layout';
import HeaderSection from '../../layout/pages/HeaderSection';
import Body from '../../layout/pages/Body';
import Articles from '../../layout/pages/Articles';
import ArticleSummary from '../../layout/pages/ArticleSummary';
import PageHeader from '../../typography/PageHeader';
import Topic from '../../typography/Topic';
import ArticleTitle from '../../typography/ArticleTitle';
import ArticleBody from '../../typography/ArticleBody';
import Caption from '../../typography/Caption';
import Link from '../../link';
import Image from '../../images/Image';
import MobileScreen from '../../devices/Mobile';

const renderPosts = ({ frontmatter, id, excerpt, fields }) => {
  const { topic, image, title, date } = frontmatter;
  const { path } = fields;
  return (
    <Articles key={id}>
      {topic && <Topic>{topic}</Topic>}
      {prop('src', image) && (
        <Image
          {...image}
          url={path}
        />
      )}
      <Link
        withTextDecoration={false}
        to={path}
      >
        <ArticleSummary>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleBody><div dangerouslySetInnerHTML={{ __html: excerpt }}/></ArticleBody>
        </ArticleSummary>
      </Link>
      <Caption>
        {date}
      </Caption>
      <hr />
    </Articles>
  );
}
export default ({ posts, pageTitle }): Node => {
  return (
    <Layout>
      <Flex flexDirection="column">
        <MobileScreen>
          <Image
            src="https://images.unsplash.com/photo-1421882402971-b18cd1741ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80"
            url="https://unsplash.com/photos/gm3bxHin8VA"
            caption="Photo By Daria Nepriakhina"
            captionUrl="https://unsplash.com/@epicantus"
            captionPx={3}
          />
        </MobileScreen>
        <Body>
          <HeaderSection>
            <PageHeader>
              {pageTitle}
            </PageHeader>
          </HeaderSection>
          {posts.map(renderPosts)}
        </Body>
      </Flex>
    </Layout>
  )
}
