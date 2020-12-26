import React from 'react';
import Layout from '@layouts/default';
import SEO from '@layouts/seo';
import { Content, Side } from '@components/styledComponents';
import SideList from '@components/sideList';
import RestaurantDetails from '@components/restaurantDetails';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Side>
      <SideList />
    </Side>
    <Content>
      <RestaurantDetails />
    </Content>
  </Layout>
);

export default IndexPage;
