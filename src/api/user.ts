import { UserNode } from "./prisma"

type KeysOfUserNode = keyof UserNode;

export const Items: UserNode[] = [
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "Xing Wenju",
    etnia: "han",
    id: "cjn8xmziv001o0770ie4hz5yl",
    gender: "male",
  },
];

export const getUserById = (id: any) => {
  return id === undefined ? Items[0] : Items.find(x => x.id === id);
};

export const getUser = (limit?: any) => {
  return limit ? Items.slice(0, limit) : Items;
};

const UserApi: any = { Items, getUser, getUserById };
export default UserApi;
