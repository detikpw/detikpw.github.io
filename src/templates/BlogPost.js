import React from "react"
import { graphql } from "gatsby"
import { Flex, Box } from 'rebass';
import { prop } from 'ramda';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Body from '../components/layout/pages/Body';
import HeaderSection from "../components/layout/pages/HeaderSection";
import Article from "../components/layout/pages/Article";
import PageHeader from '../components/typography/PageHeader';
import Topic from '../components/typography/Topic';
import Caption from '../components/typography/Caption';
import Image from '../components/images/Image';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { excerpt, frontmatter, html, timeToRead } = markdownRemark;
  const { title, image, topic, date } = frontmatter;
  return (
    <Layout>
      {prop('src', image) && (
        <Image
          {...image}
          captionPx={3}
        />
      )}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Helmet>
      <Body>
        <HeaderSection>
          {topic && <Topic as='h1'>{topic}</Topic>}
          <PageHeader>
            {title}
          </PageHeader>
        </HeaderSection>
        <Flex>
          <Caption>
            {date}
          </Caption>
          <Box css={{
            flex: 1
          }}/>
          <Caption>
            {`${timeToRead} minutes`}
          </Caption>
        </Flex>
        <Article>
          {html}
        </Article>
      </Body>
      <hr />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      timeToRead
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        topic
        image {
          src
          url
          caption
          captionUrl
        }
      }
    }
  }
`
