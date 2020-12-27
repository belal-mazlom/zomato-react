import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '@utils/defines';
import {
  APP,
  CATEGORIES,
  COST,
  CUISINES,
  RATING,
  RESTAURANT,
  RESTAURANTS,
} from '@utils/redux/types';
import {
  setCategories,
  setCost,
  setCuisine,
  setRating,
  setRestaurants,
  toggleCategory,
  toggleCuisine,
  setStartPage,
  selectRestaurant,
  setMaxCost,
  setLoading,
} from '@utils/redux/slices';

const initialState = {
  loading: false,
  categories: [],
  cuisines: [],
  rating: [0, 5],
  cost: [0, 100],
  restaurants: [],
  filteredRestaurants: [],
  restaurantDetails: null,
  startPage: 0,
  maxCost: 0,
} as RootState;

const rootReducer = createReducer(initialState, {
  [APP.setLoading]: (state, action) => setLoading(state, action),
  [CATEGORIES.success]: (state, action) => setCategories(state, action),
  [CATEGORIES.toggle]: (state, action) => toggleCategory(state, action),
  [CUISINES.success]: (state, action) => setCuisine(state, action),
  [CUISINES.toggle]: (state, action) => toggleCuisine(state, action),
  [RATING.set]: (state, action) => setRating(state, action),
  [COST.set]: (state, action) => setCost(state, action),
  [RESTAURANTS.get]: state => {
    state.loading = true;
    return state;
  },
  [RESTAURANTS.success]: (state, action) => setRestaurants(state, action),
  [RESTAURANTS.setStart]: (state, action) => setStartPage(state, action),
  [RESTAURANT.set]: (state, action) => selectRestaurant(state, action),
  [COST.success]: (state, action) => setMaxCost(state, action),
});

export default rootReducer;
