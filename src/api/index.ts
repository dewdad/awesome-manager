// implement your own methods in here, if your data is coming from A rest API

import User from "./user";
import Activity from "./activity";
import Chat from "./chat";
import Files from "./file";
import Mail from "./mail";
import Post from "./post";
import Chart from "./chart";
import Project from "./project";
export default {
  // user
  getUser: User.getUser,
  getUserById: User.getUserById,
  // project
  getProject: Project.getProject,
  // activity
  getActivity: Activity.getActivity,
  // post
  getPost: Post.getPost,
  // chat
  getChatMenu: Chat.Menu,
  getChatGroup: Chat.Groups,
  getChatGroupById: Chat.getChatById,
  // FIle
  getFile: Files.getFile,
  getFileMenu: Files.getFileMenu,
  // mail
  getMail: Mail.getMail,
  getMailMenu: Mail.MailMenu,
  getMailById: Mail.getMailById,
  getMailByType: Mail.getMailByType,
  // chart data
  getMonthVisit: Chart.monthVisitData,
  getCampaign: Chart.campaignData,
  getLocation: Chart.locationData,
};
