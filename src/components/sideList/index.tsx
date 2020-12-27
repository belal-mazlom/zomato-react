import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurant, RootState } from '@utils/defines';
import Item from './item';
import { Container, List, Title } from './style';
import { RESTAURANT } from '@utils/redux/types';

export default function SideList() {
  const dispatch = useDispatch();
  const data: Restaurant[] = useSelector(
    (state: RootState) => state.filteredRestaurants
  );
  const selectedRestaurant: Restaurant | null = useSelector(
    (state: RootState) => state.restaurantDetails
  );

  return (
    <Container>
      <Title>Result</Title>
      <List>
        {data.map((item: Restaurant) => (
          <Item
            key={item.id}
            item={item}
            selected={Boolean(
              selectedRestaurant && selectedRestaurant.id == item.id
            )}
            onClick={(restaurant: Restaurant) => dispatch({ type: RESTAURANT.set, payload: { restaurant } })}
          />
        ))}
      </List>
    </Container>
  );
}
