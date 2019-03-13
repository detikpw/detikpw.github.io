import React from 'react';
import Layout from './src/components/layout';

require("prismjs/themes/prism-solarizedlight.css")

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
