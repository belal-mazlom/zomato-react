import React from 'react';
import { Restaurant, RootState } from '@utils/defines';
import { useSelector } from 'react-redux';
import {
  Container,
  Details,
  EmptyBox,
  FeatureItem,
  FeatureList,
  Preview,
  PreviewImage,
  SubTitle,
  Title,
} from './style';
import PropertyItem from './propertyItem';
import TimeItem from './timeItem';

function getPriceRange(priceRange: number) {
  let result = '';
  for (let i = 0; i < priceRange; i++) {
    result += '$';
  }
  return result;
}

export default function RestaurantDetails() {
  const restaurant: Restaurant | null = useSelector(
    (state: RootState) => state.restaurantDetails
  );

  if (!restaurant) {
    return (<EmptyBox>Select a restaurant to see the details!</EmptyBox>);
  }

  return (
    <Container>
      <Preview>
        <PreviewImage src={restaurant.imageUrl} />
      </Preview>
      <Details>
        <Title>{restaurant?.name}</Title>
        <SubTitle>{restaurant.address}</SubTitle>
        <FeatureList>
          <FeatureItem available={restaurant.booking}>Booking</FeatureItem>
          <FeatureItem available={restaurant.delivery}>
            Delivery Available
          </FeatureItem>
        </FeatureList>
        <FeatureList marginTop={3}>
          <PropertyItem title={'cuisines'} value={restaurant.cuisines} />
          <PropertyItem title={'phone number'} value={restaurant.phoneNumber} />
          <PropertyItem
            title={'price range'}
            value={getPriceRange(restaurant.priceRange)}
          />
          <PropertyItem title={'Rating'} value={restaurant.rating.toString()} />
          <TimeItem title={'opening hours'} value={restaurant.timings} />
        </FeatureList>
      </Details>
    </Container>
  );
}
