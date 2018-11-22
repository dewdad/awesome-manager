import { Model } from "@vuex-orm/core";
export default class User extends Model {
  static entity = "user";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      protocolId: this.string("2"),
      name: this.string("Xing Wenju"),
      etnia: this.string("han"),
      birthday: this.string("1978-09-16"),
      gender: this.string("male"),
      position: this.string("Political Consellor"),
      academicBackground: this.string("Master"),
      foreignLanguage: this.string("Spanish"),
      politicalRole: this.string("CPC"),
      rank: this.string("Directorial"),
      promotionDate: this.string("2017-1-1"),
      outRole: this.string("Political Consellor"),
      innerRole: this.string("Member of CPC Committee"),
      chargeOf: this.string("Second"),
      sendingEntity: this.string("MFA"),
      fromEntity: this.string("MFA"),
      arrivingDate: this.string("2016-4-9"),
      leavingDate: this.string("2020-4-9"),
      memo: this.string("No"),
    };
  }
}
