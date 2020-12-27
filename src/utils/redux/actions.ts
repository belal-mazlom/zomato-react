import { createAction } from '@reduxjs/toolkit';
import { CheckboxItem, Restaurant } from '@utils/defines';
import {
  APP,
  CATEGORIES,
  COST,
  CUISINES,
  RATING,
  RESTAURANT,
} from './types';

export const setLoading = createAction<boolean>(APP.tosetLoadingggle);
export const toggleCategory = createAction<CheckboxItem>(CATEGORIES.toggle);
export const toggleCuisine = createAction<CheckboxItem>(CUISINES.toggle);
export const setRating = createAction<number[]>(RATING.set);
export const setCost = createAction<number[]>(COST.set);
export const setStartRestaurant = createAction<number>(COST.set);
export const selectRestaurant = createAction<Restaurant>(RESTAURANT.set);
