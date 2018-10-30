import { PersistentPlugin } from "./persistentPlugin";

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

export default plugins;
