import React from "react"
import { graphql } from "gatsby"
import { Flex, Box } from 'rebass';
import { path, prop, isEmpty } from 'ramda';
import URI from 'urijs';
import { paramCase, sentence } from 'change-case';
import Layout from '../components/layout';
import Body from '../components/layout/pages/Body';
import HeaderSection from "../components/layout/pages/HeaderSection";
import Article from "../components/layout/pages/Article";
import PageHeader from '../components/typography/PageHeader';
import Topic from '../components/typography/Topic';
import Caption from '../components/typography/Caption';
import Image from '../components/images/Image';
import Link from '../components/link';
import Share from '../components/social/Share';

const appendLink = (value, index, values) => (
  <Link key={value} to={`/tags/${paramCase(value)}`} withTextDecoration={false}>
    {`${sentence(value)}${values.length - 1 !== index ? ', ' : ''}`}
  </Link>
);

export default function Template({
  pageContext: { pathname },
  data, // this prop will be injected by the GraphQL query below.
  location
}) {
  const { markdownRemark, site } = data // data.markdownRemark holds our post data
  const { excerpt, frontmatter, html, timeToRead } = markdownRemark;
  const { title, image, topic, date, tags } = frontmatter;
  const host = path(['siteMetadata', 'host'], site);
  const currentUrl = new URI(`${host}/${pathname}`)
  const pageData = {
    title,
    description: excerpt,
    image
  }
  return (
    <Layout location={location} pageData={pageData}>
      {prop('src', image) && (
        <Image
          {...image}
          captionPx={3}
        />
      )}
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
        <Flex alignItems="center">
          {!isEmpty(tags) && <Caption>
            tags: {tags.map(appendLink)}
          </Caption>}
          <Box flex={1} />
          <Share url={currentUrl.toString()}/>
        </Flex>
      </Body>
      <hr />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        host
      }
    }
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      timeToRead
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        topic
        tags
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
