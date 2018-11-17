/**
 * # mongodb.js
 *
 * All the user information will be documents in MongoDB
 *
 * This class sets up the connection depending on the environment
 *
 */
//use mongoose as the ORM
const Mongoose = require("mongoose");

const Config = {
  mongodb: {
    ip: "192.168.0.100",
    port: "27017",
    app: "nodejs",
  },
};
/**
 * ## Default the connection string to the development envionment
 *
 */
const connection_string = Config.mongodb.ip + ":" + Config.mongodb.port + "/" + Config.mongodb.app;

Mongoose.connect(connection_string);

/**
 *
 * User docers
 */
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

// schema
const TestSchema = new Schema({
  title: String,
});

const TestDocument = mongoose.model("Test", TestSchema);

export function addDocument(data: any) {
  let doc = new TestDocument();
  doc.title = data.title;
  doc.save();
}
