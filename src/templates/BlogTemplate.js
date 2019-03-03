import React from "react"
import { graphql } from "gatsby"
import { Image } from 'rebass';
import Layout from '../components/layout';
import Body from '../components/layout/pages/Body';
import HeaderSection from "../components/layout/pages/HeaderSection";
import Article from "../components/layout/pages/Article";
import PageHeader from '../components/typography/PageHeader';
import Topic from '../components/typography/Topic';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Image src="https://images.unsplash.com/photo-1517842645767-c639042777db?
ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" />
      <Body>
        <HeaderSection>
          <Topic as='h1'>TEST</Topic>
          <PageHeader>
            {frontmatter.title}
          </PageHeader>
        </HeaderSection>
        <Article>
          {html}
        </Article>
      </Body>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
