// @ts-ignore
import { reaction } from 'dacho';

export const APP = reaction(['setLoading'], 'app/');

export const CATEGORIES = reaction(
  ['get', 'success', 'fail', 'toggle'],
  'filter/categories/'
);

export const CUISINES = reaction(
  ['get', 'success', 'fail', 'toggle'],
  'filter/cuisines/'
);

export const RATING = reaction(['set'], 'filter/rating/');

export const COST = reaction(['set', 'getMax', 'success', 'fail'], 'filter/cost/');

export const RESTAURANTS = reaction(
  ['get', 'success', 'fail', 'setStart', 'loadMore'],
  'filter/restaurants/'
);

export const RESTAURANT = reaction(
  ['set'],
  'filter/restaurant-details/'
);
