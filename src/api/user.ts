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
  async users({
    id,
    username,
  }: {
    id: string | null;
    username: string | null;
  }) {
    const userenameParams = `?username=${username}`;
    const idParams = `?id=${id}`;

    const res = await instance.get<IUser[]>(
      `/users${username ? userenameParams : idParams}`
    );
    return res.data;
  },
  async user(id: number) {
    const res = await instance.get<IUser[]>(`/users/333${id}`);
    return res.data;
  },
};
