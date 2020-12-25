import React from 'react';
import { Link } from 'gatsby';

import Layout from '@layouts/layout';
import SEO from '@layouts/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to site.</p>
  </Layout>
);

export default IndexPage;
