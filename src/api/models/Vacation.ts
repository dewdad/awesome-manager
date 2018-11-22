import { Model } from "@vuex-orm/core";
export default class Vacation extends Model {
  static entity = "vacation";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      applicant: this.string("nobody"),
      startDate: this.string("startDate"),
      endDate: this.string("endDate"),
      routes: this.string("routes"),
      type: this.string("type"),
      flightTicket: this.string("flightTicket"),
      hotelRoom: this.string("hotelRoom"),
      transport: this.string("transport")
    };
  }
}
