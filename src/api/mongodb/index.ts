/**
 * All the user information will be documents in MongoDB
 * This class sets up the connection depending on the environment
 */
//use mongoose as the ORM
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export class Mongo {
  config;
  connection_string;
  mongodb;
  constructor(config) {
    this.config = config || {
      mongodb: {
        ip: "127.0.0.1",
        port: "27017",
        app: "test",
      },
    };
    this.connection_string =
      this.config.mongodb.ip + ":" + config.mongodb.port + "/" + config.mongodb.app;
    this.init();
  }

  /**
   * Init a database connection and return the connection
   * @returns {Object} mongodb - mongoose connection
   * @throws {Error} err - error handling
   */
  init() {
    try {
      mongoose.connect(this.connection_string);
      this.mongodb = mongoose.connection;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Create and return a mongoose model
   * @param {String} modelName - Name of model
   * @param {Object} schemaOptions - Shape of schema
   * @example
   * createModel("User", { name: String })
   */
  createModel(modelName, schemaOptions) {
    return mongoose.model(modelName, new Schema(schemaOptions || { name: String }));
  }
}

const mongo = new Mongo({
  mongodb: {
    ip: "192.168.0.100",
    port: "27017",
    app: "test",
  },
});

export default mongo;

// const Document = mongo.createDocument({});
// const doc = new Document();
// doc.save();
