// @flow

import type { Node } from 'react';

import React from 'react';
import { Image } from 'rebass';
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

export default (): Node => (
    <Layout>
        <Image
          src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
        />
        <Body>
          <HeaderSection>
            <PageHeader>
              Terbaru
            </PageHeader>
          </HeaderSection>
          <Articles>
            <Topic>Topik 1</Topic>
            <Image
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            />
            <ArticleSummary>
              <ArticleTitle>Judul title</ArticleTitle>
              <ArticleBody>I'm currently hacking something with Gatsby + Contentful and I'm trying to display a p with a different color than the global p without success</ArticleBody>
            </ArticleSummary>
          </Articles>
          <Articles>
            <Topic>Topik 1</Topic>
            <Image
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            />
            <ArticleSummary>
              <ArticleTitle>Judul title</ArticleTitle>
              <ArticleBody>I'm currently hacking something with Gatsby + Contentful and I'm trying to display a p with a different color than the global p without success</ArticleBody>
            </ArticleSummary>
          </Articles>
        </Body>
    </Layout>
)
