# Usage

## Install Prisma

```sh
yarn global add prisma
```

## Install Plugin

```javascript
vue add prisma
```

## Invoke Plugin

```javascript
vue invoke prisma
```

## Run demo

Add this file in `src/prisma/js-client/demo.ts`

```javascript
import { prisma, UserNode } from "../prisma";

export async function userDemo() {
  const users = await prisma.Users();
  console.log("获取用户表");
  console.log(users);
  console.log("查询用户名");
  const usersWithAInName = await prisma.Users({
    where: {
      name_contains: "xi",
    },
  });
  console.log(usersWithAInName);
  console.log("创建新用户");
  const user: UserNode = await prisma.createUser({
    name: "xing",
    etnia: "han",
    gender: "male",
    birthday: "2009-09-09",
    position: "x",
  });
  console.log("新用户创建成功");
  console.log(user);
  console.log("更新用户字段");
  const updatedUser = await prisma.updateUser({
    data: {
      name: "Xing Wenju",
    },
    where: {
      id: user.id,
    },
  });
  console.log("新的用户字段");
  console.log(updatedUser);
  // const deletedUser = await prisma.deleteUser({
  //   id: "cjn3zowm3dsnb0b78rvqrngst",
  // });
  // console.log(deletedUser);
}

userDemo()
  .then(result => {
    console.log("Running the demo...");
  })
  .catch(e => console.log(e));
```
