// import RxDB from "rxdb";
// import adapter from "pouchdb-adapter-http";
// // import adapter from "pouchdb-adapter-leveldb";

// // Use plugins
// RxDB.plugin(apater);

// // define schema
// export const heroSchema = {
//   title: "hero schema",
//   description: "describes a simple hero",
//   version: 0,
//   type: "object",
//   properties: {
//     name: {
//       type: "string",
//       primary: true,
//     },
//     color: {
//       type: "string",
//     },
//   },
//   required: ["color"],
// };

// let _getDatabase; // cached
// export function getDatabase(name, adapter) {
//   if (!_getDatabase) _getDatabase = createDatabase(name, adapter);
//   return _getDatabase;
// }

// export async function createDatabase(name, adapter) {
//   const db = await RxDB.create({
//     name,
//     adapter,
//     password: "20090909",
//   });

//   console.log("creating hero-collection..");
//   await db.collection({
//     name: "heroes",
//     schema: heroSchema,
//   });

//   return db;
// }
