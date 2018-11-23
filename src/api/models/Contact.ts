import { Model } from "@vuex-orm/core";
export default class Contact extends Model {
  static entity = "contact";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      homePhone: this.string("001-212-1111111"),
      officePhone: this.string(""),
      cellPhone: this.string(""),
      email: this.string(""),
      wechat: this.string(""),
      whatsapp: this.string(""),
      github: this.string(""),
      twitter: this.string(""),
      instagram: this.string(""),
      homepage: this.string(""),
      avatar: this.string(""),
    };
  }
}
