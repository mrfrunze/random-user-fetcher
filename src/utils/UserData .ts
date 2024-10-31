
export type UserData = {
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
    location: {
      city: string;
      country: string;
      postcode: string;
      street: { number: number; name: string };
    };
    registered: { age: number };
    phone: string;
    gender: string;
};
  