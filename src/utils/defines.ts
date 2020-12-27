export interface CheckboxItem {
  id: string;
  name: string;
  checked: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  cuisines: string;
  cost: number;
  imageUrl: string;
  phoneNumber: string;
  priceRange: number;
  timings: string;
  booking: boolean;
  delivery: boolean;
  rating: number;
}

export interface RootState {
  loading: boolean,
  categories: CheckboxItem[],
  cuisines: CheckboxItem[],
  rating: number[],
  cost: number[],
  restaurants: Restaurant[],
  filteredRestaurants: Restaurant[],
  restaurantDetails: Restaurant | null,
  startPage: number,
  maxCost: number,
};