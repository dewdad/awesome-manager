import { PersistentPlugin } from "./persistentPlugin";
// import ormPlugin from "./ormPlugin";

import { collections } from "@/api/globals";

import pathify from "./pathify";
pathify.debug();

const plugins: any[] = [];

// 启用Pathify插件
plugins.push(pathify.plugin);

// 启用写入硬盘插件
collections.forEach((collection: string) => {
  plugins.push(PersistentPlugin({ namespace: collection }));
});

// 启用orm
// plugins.push(ormPlugin);

export default plugins;
