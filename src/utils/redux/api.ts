import { CATEGORIES, CUISINES, RESTAURANTS, COST } from './types';

export const getCategories = () => ({
  types: [CATEGORIES.get, CATEGORIES.success, CATEGORIES.fail],
  payload: {
    request: {
      url: '/categories',
    },
  },
});

export const getCuisines = () => ({
  types: [CUISINES.get, CUISINES.success, CUISINES.fail],
  payload: {
    request: {
      url: '/cuisines',
      params: {
        city_id: 297, //Adelaide, SA
      },
    },
  },
});

export const getRestaurants = (
  startPage = 0,
  cuisines: string[] = [],
  categories: string[] = [],
) => {
  const params: any = {
    entity_type: 'city',
    entity_id: 297, //Adelaide, SA
    start: startPage,
    count: 20,
  };

  if (cuisines.length) {
    params.cuisines = cuisines;
  }
  if (categories.length) {
    params.category = categories;
  }

  return {
    types: [RESTAURANTS.get, RESTAURANTS.success, RESTAURANTS.fail],
    payload: {
      request: {
        url: '/search',
        params,
      },
    },
  } as any;
};

export const getMaxCost = () => {
  // This Res"id": "16608070", "name": "d'Arry's Verandah Restaurant",
  // return cost $25000017 :) It's seems mistake from Zomato, so taken second restaurnt
  const params: any = {
    entity_type: 'city',
    entity_id: 297, //Adelaide, SA
    start: 0,
    count: 2,
    sort: 'cost',
    order: 'desc'
  };

  return {
    types: [COST.getMax, COST.success, COST.fail],
    payload: {
      request: {
        url: '/search',
        params,
      },
    },
  } as any;
};
