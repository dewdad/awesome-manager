import { ActivityNode } from "@/api/prisma";
import { Model } from "@vuex-orm/core";

const Activity: ActivityNode = {
  id: "1",
  occurrenceDate: "2018-10-30",
  content: "XXX",
  currentDate: "2018-10-30",
  startTime: "2018-10-30",
  endTime: "2018-10-30",
  reportDate: "2018-10-30",
  reportContent: "XXX",
  instructionDate: "2018-10-30",
  instruction: "XXX",
  priority: "HIGH",
};

export class ActivityModel extends Model {
  static entity = "activity";

  static fields() {
    return {
      id: this.increment(),
      occurenceDate: this.string("2018-10-30"),
      content: this.string("XXX"),
      currentDate: this.string("2018-10-30"),
      startTime: this.string("2018-10-30"),
      endTime: this.string("2018-10-30"),
      reportDate: this.string("2018-10-30"),
      reportContent: this.string("XXX"),
      instructionDate: this.string("2018-10-30"),
      instruction: this.string("XXX"),
      priority: this.string("HIGH"),
    };
  }
}

export default Activity;
