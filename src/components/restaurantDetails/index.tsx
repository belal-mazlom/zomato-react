import React, { useContext, useState } from 'react';
import { RestaurantListItem } from '@app/utils/defines';
import {
  Container,
  Details,
  FeatureItem,
  FeatureList,
  Preview,
  PreviewImage,
  SubTitle,
  Title,
} from './style';
import PropertyItem, { LabelColor } from './propertyItem';

export default function SideList() {
  return (
    <Container>
      <Preview>
        <PreviewImage src={require('@images/app-icon.png')} />
      </Preview>
      <Details>
        <Title>Restaurant Name</Title>
        <SubTitle>Address</SubTitle>
        <FeatureList>
          <FeatureItem available={true}>Food</FeatureItem>
          <FeatureItem available={false}>Drink</FeatureItem>
        </FeatureList>
        <FeatureList marginTop={3}>
          <PropertyItem
            title={'cuisines'}
            value={'Coffee and Tea, Cafe Food'}
          />
          <PropertyItem title={'phone number'} value={'0425 729 534'} />
          <PropertyItem
            title={'opening hours'}
            value={'Today 6:30 AM to 4:00 PM'}
            label={'open now'}
            labelColor={LabelColor.success}
          />
        </FeatureList>
      </Details>
    </Container>
  );
}
