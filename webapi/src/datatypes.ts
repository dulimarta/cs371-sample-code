type RandomUser = {
  results: Array<User>;
};

// Define the type User to match the JSON structure from https://randomuser.me/api
type User = {
  name: {
    first: string;
    last: string;
  };
  location: {
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export { User, RandomUser };
