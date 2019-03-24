import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { prop, path } from 'ramda';
import Helmet from 'react-helmet';

const siteMeta = ({ pageData, location, children })=> ({ site: { siteMetadata } }) => {
  const getTitle = prop('title')
  const getDescription = prop('description');
  const getTwitterUsername = path(['social', 'twitter', 'username']);
  const title = getTitle(pageData) || getTitle(siteMetadata);
  const description = getDescription(pageData) || getDescription(siteMetadata);
  const image = path(['image', 'src'])(pageData);
  console.log('location')
  console.log(location)
  return (
    <Helmet titleTemplate={`%s | ${getTitle(siteMetadata)}`}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={getTwitterUsername(siteMetadata)} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </Helmet>
  );
}

const SiteMeta = ({ pageData, location, children }) => (
  <StaticQuery
    query={graphql`
      query{
        site {
          siteMetadata {
            title
            description
            host
            social {
              twitter {
                username
              }
            }
          }
        }
      }
    `
    }
    render={siteMeta({ pageData, location, children })}
  />
)

export default SiteMeta;
