import { UserNode } from "./prisma";

type KeysOfUserNode = keyof UserNode;

export const Items: UserNode[] = [
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "Xing Wenju",
    etnia: "han",
    id: "cjn8xmziv001o0770ie4hz5yl",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "Xing Wenju",
    etnia: "han",
    id: "cjn8xn8x8001v07700gq1rnyi",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "Alice",
    etnia: "han",
    id: "cjn8xr12w00250770qa0tar63",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xr3lh002807706jexy80f",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrqzn002c07708i8vmr2d",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrrbm002f0770m6yp8053",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrrje002i0770t3h78891",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrro7002l0770fb0wp09k",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrrs9002o07706hg6heht",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrrwp002r077076hhlfkk",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrs0o002u0770ps1x9sky",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrs4f002x07700580mquh",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrs7o00300770javs4ymk",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrsco003307701v0s99k5",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrslt003607709tba86qj",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrsvu00390770z5rnk75z",
    gender: "male",
  },
  {
    birthday: "2009-09-09T00:00:00.000Z",
    name: "wanglulu",
    etnia: "han",
    id: "cjn8xrt3i003c0770mjh3eeb7",
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
