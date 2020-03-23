export interface Dragon {
    name: string;
    color: string;
    age: number;
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

export function defaultDragon(): Dragon {
  return {
    name: '',
    color: '',
    age: 0,
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
