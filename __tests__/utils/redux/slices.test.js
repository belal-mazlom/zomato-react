import { mapRestaurant, filterRestaurants } from '@utils/redux/slices';

describe('Test slices.ts', () => {
  it('Test mapRestaurant', () => {
    const APIRestaurant = {
      id: '1',
      name: 'Restaurant test',
      location: {
        address: 'address one',
      },
      cuisines: ['American', 'Italian'],
      average_cost_for_two: 80,
      featured_image: 'image/url',
      phone_numbers: '77827777777',
      price_range: 3,
      timings: '9:00 - 10:00 (Mon-Sat)',
      has_table_booking: true,
      has_online_delivery: true,
      user_rating: {
        aggregate_rating: 4.6,
      },
    };

    const restaurant = {
      id: '1',
      name: 'Restaurant test',
      address: 'address one',
      cuisines: ['American', 'Italian'],
      cost: 80,
      imageUrl: 'image/url',
      phoneNumber: '77827777777',
      priceRange: 3,
      timings: '9:00 - 10:00 (Mon-Sat)',
      booking: true,
      delivery: true,
      rating: 4.6
    };
    const jsonResult = JSON.stringify(restaurant);
    const mappedContent = mapRestaurant (APIRestaurant);

    expect(JSON.stringify(mappedContent)).toEqual(jsonResult);
  });

  it('Test filterRestaurants', () => {
    const restaurants = [
      {
        id: '1',
        name: 'Restaurant test',
        address: 'address one',
        cuisines: ['American', 'Italian'],
        cost: 80,
        imageUrl: 'image/url',
        phoneNumber: '77827777777',
        priceRange: 3,
        timings: '9:00 - 10:00 (Mon-Sat)',
        booking: true,
        delivery: true,
        rating: 3
      },
      {
        id: '2',
        name: 'Restaurant test two',
        address: 'address one',
        cuisines: ['American', 'Italian'],
        cost: 90,
        imageUrl: 'image/url',
        phoneNumber: '77827777777',
        priceRange: 3,
        timings: '9:00 - 10:00 (Mon-Sat)',
        booking: true,
        delivery: true,
        rating: 4.6
      }
    ];
    const filtered1 = filterRestaurants(restaurants, [0, 3], [0, 80]);
    const filtered2 = filterRestaurants(restaurants, [0, 4], [100, 120]);

    expect(filtered1.length).toEqual(1);
    expect(filtered1[0].id).toEqual('1');
    expect(filtered2.length).toEqual(0);
  });
});
