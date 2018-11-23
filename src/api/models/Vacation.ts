import { Model } from "@vuex-orm/core";
import User from "./User";
export default class Vacation extends Model {
  static entity = "vacation";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      applicant: this.string("applicant"),
      user: this.belongsTo(User, "_id"),
      startDate: this.string("startDate"),
      endDate: this.string("endDate"),
      routes: this.string("routes"),
      type: this.string("type"),
      flightTicket: this.string("flightTicket"),
      hotelRoom: this.string("hotelRoom"),
      transport: this.string("transport"),
    };
  }
}
