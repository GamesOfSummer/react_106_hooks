export interface dragon {
    name: string;
    color: string;
    category: string;
    location: {
        address: string;
        city: string;
        state: string;
        postalCode: string;
        lat: number;
        lng: number;
    };
}

export function defaultDragon(): dragon {
  return {
    name: '',
    color: '',
    category: '',
    location: {
      address: '',
      city: '',
      state: '',
      postalCode: '',
      lat: 0,
      lng: 0,
    },
  };
}
