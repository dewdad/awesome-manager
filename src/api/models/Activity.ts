import { Model } from "@vuex-orm/core";

export default class Activity extends Model {
  static entity = "activity";

  static fields() {
    return {
      id: Model.increment(),
      occurenceDate: Model.string("2018-10-30"),
      content: Model.string("XXX"),
      currentDate: Model.string("2018-10-30"),
      startTime: Model.string("2018-10-30"),
      endTime: Model.string("2018-10-30"),
      reportDate: Model.string("2018-10-30"),
      reportContent: Model.string("XXX"),
      instructionDate: Model.string("2018-10-30"),
      instruction: Model.string("XXX"),
      priority: Model.string("HIGH"),
    };
  }
}
