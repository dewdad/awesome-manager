// // using access as db
// import ADODB from "node-adodb";

// const cnn = ADODB.open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=node-adodb.mdb;");

// // 全局调试开关，默认关闭
// process.env.DEBUG = "ADODB";

// export function insertItem(params: any) {
//   // 不带返回的查询
//   cnn
//     .execute('INSERT INTO Users(UserName, UserSex, UserAge) VALUES ("Newton", "Male", 25)')
//     .on("done", function(data) {
//       console.log("result:", JSON.stringify(data, null, "  "));
//     })
//     .on("fail", function(error) {
//       // TODO 逻辑处理
//     });
// }

// export function insertItemWithFlag(params: any) {
//   // 带返回标识的查询
//   cnn
//     .execute(
//       'INSERT INTO Users(UserName, UserSex, UserAge) VALUES ("Newton", "Male", 25)',
//       "SELECT @@Identity AS id",
//     )
//     .on("done", function(data) {
//       console.log("result:", JSON.stringify(data, null, "  "));
//     })
//     .on("fail", function(error) {
//       // TODO 逻辑处理
//     });
// }

// export function selectItems(params: any) {
//   // 带返回的查询
//   cnn
//     .query("SELECT * FROM Users")
//     .on("done", function(data) {
//       console.log("result:", JSON.stringify(data, null, "  "));
//     })
//     .on("fail", function(error) {
//       // TODO 逻辑处理
//     });
// }

// export default cnn;
