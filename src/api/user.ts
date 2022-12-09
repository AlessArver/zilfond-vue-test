import { instance } from ".";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export const usersApi = {
  async users({ username }: { username: string }) {
    const res = await instance.get<IUser[]>(`/users?username=${username}`);
    return res.data;
  },
  async user(id: number) {
    const res = await instance.get<IUser[]>(`/users/${id}`);
    return res.data;
  },
};
