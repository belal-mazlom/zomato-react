import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '@utils/defines';
import { getRestaurants } from './api';
import { CATEGORIES, CUISINES } from './types';

export const UpdateRestaurants: Middleware = ({ getState, dispatch }) => next => action => {
  if (action.type === CATEGORIES.toggle || action.type === CUISINES.toggle) {
    next(action);
    const state: RootState = getState();
    const selectedCategories = state.categories
      .filter(category => category.checked)
      .map(category => category.id);
    
    const selectedCuisine = state.cuisines
      .filter(cuisine => cuisine.checked)
      .map(cuisine => cuisine.id);
    
    dispatch(getRestaurants(0, selectedCuisine, selectedCategories));
    return;
  }
  return next(action);
};
