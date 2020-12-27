import { CheckboxItem, Restaurant, RootState } from '@utils/defines';

function mapRestaurant(restaurant: any) {
  return {
    id: restaurant.id,
    name: restaurant.name,
    address: restaurant.location.address,
    cuisines: restaurant.cuisines,
    cost: restaurant.average_cost_for_two,
    imageUrl: restaurant.featured_image,
    phoneNumber: restaurant.phone_numbers,
    priceRange: restaurant.price_range,
    timings: restaurant.timings,
    booking: restaurant.has_table_booking,
    delivery: restaurant.has_online_delivery,
    rating: parseFloat(restaurant.user_rating.aggregate_rating),
  } as Restaurant;
}

function filterRestaurants(
  restaurants: Restaurant[],
  rating: number[],
  cost: number[]
) {
  return restaurants.filter(restaurant => {
    return (
      restaurant.rating >= rating[0] &&
      restaurant.rating <= rating[1] &&
      restaurant.cost >= cost[0] &&
      restaurant.cost <= cost[1]
    );
  });
}

export const setLoading = (state: RootState, action: any) => {
  state.loading = action.payload.loading;
  return state;
};

export const setCategories = (state: RootState, action: any) => {
  if (action.payload.data) {
    const { categories } = action.payload.data;
    state.categories = categories.map((item: any) => {
      return { ...item.categories, checked: false };
    });
  }
  return state;
};

export const toggleCategory = (state: RootState, action: any) => {
  const { item } = action.payload;
  const itemIndex = state.categories.findIndex(
    (_item: CheckboxItem) => _item.id === item.id
  );
  state.categories[itemIndex].checked = !item.checked;
  return state;
};

export const setCuisine = (state: RootState, action: any) => {
  if (action.payload.data) {
    const { cuisines } = action.payload.data;
    state.cuisines = cuisines.map(
      ({ cuisine: { cuisine_id, cuisine_name } }: any) => {
        return { id: cuisine_id, name: cuisine_name, checked: false };
      }
    );
  }
  return state;
};

export const toggleCuisine = (state: RootState, action: any) => {
  const { item } = action.payload;
  const itemIndex = state.cuisines.findIndex(
    (_item: CheckboxItem) => _item.id === item.id
  );
  state.cuisines[itemIndex].checked = !item.checked;
  return state;
};

export const setRating = (state: RootState, action: any) => {
  const { rating } = action.payload;
  state.rating = rating;
  state.filteredRestaurants = filterRestaurants (state.restaurants, rating, state.cost);
  return state;
};

export const setCost = (state: RootState, action: any) => {
  const { cost } = action.payload;
  state.cost = cost;
  state.filteredRestaurants = filterRestaurants (state.restaurants, state.rating, cost);
  return state;
};

export const setMaxCost = (state: RootState, action: any) => {
  const { restaurants } = action.payload.data;
  if (restaurants.length > 1) {
    const cost = restaurants[1].restaurant.average_cost_for_two;
    state.maxCost = cost;
    state.cost = [0, cost];
  }
  return state;
};

export const setRestaurants = (state: RootState, action: any) => {
  if (action.payload.data) {
    const { restaurants } = action.payload.data;
    const newRestaurants = restaurants.map(({ restaurant }: any) => {
      return mapRestaurant(restaurant);
    });
    state.restaurants = newRestaurants;
    state.filteredRestaurants = filterRestaurants (newRestaurants, state.rating, state.cost);
    state.startPage = 20;
  }
  state.loading = false;
  return state;
};

export const appendRestaurants = (state: RootState, action: any) => {
  if (action.payload.data) {
    const { restaurants } = action.payload.data;
    state.restaurants.concat(
      restaurants.map(({ restaurant }: any) => {
        return mapRestaurant(restaurant);
      })
    );
    state.startPage += 20;
  }
  return state;
};

export const setStartPage = (state: RootState, action: any) => {
  const { value } = action.payload;
  state.startPage = value;
  return state;
};

export const selectRestaurant = (state: RootState, action: any) => {
  const { restaurant } = action.payload;
  state.restaurantDetails = restaurant;
  return state;
};
