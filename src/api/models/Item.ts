import { Model } from "@vuex-orm/core";
export default class Item extends Model {
  static entity = "item";

  static primaryKey = "_id";

  static fieldsList() {
    return Object.keys(this.fields());
  }

  static fields() {
    return {
      _id: this.increment(),
      name: this.string("food"),
      brand: this.string("brand"),
      model: this.string("model"),
      productionDate: this.string("productionDate"),
      overdueDate: this.string("overdueDate"),
      description: this.string("description"),
      price: this.string("price"),
    };
  }
}
