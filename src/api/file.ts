import { join } from "path";
export const getFileMenu = [
  {
    icon: "photo",
    title: "Images",
    to: { path: "/media", query: { type: "image" } },
  },
  {
    icon: "videocam",
    title: "Video",
    to: { path: "/media", query: { type: "video" } },
  },
  {
    icon: "volume_down",
    title: "Audio",
    to: { path: "/media", query: { type: "audio" } },
  },
  {
    icon: "insert_drive_file",
    title: "Document",
    to: { path: "/media", query: { type: "doc" } },
  },
];
export const Items = [
  {
    uuid: "a32c4aec-54de-4ff4-b165-8571ae805598",
    fileName: "1.jpg",
    fileType: false,
    path: () => join(process.env.BASE_URL, "bg/1.jpg"),
    fullPath: "",
    ext: "",
    dir: "public",
    ctime: "2018-04-08T09:15:19.307Z",
    size: 12292,
  },
];

export const getFile = limit => {
  return limit ? Items.slice(0, limit) : Items;
};

export default { getFileMenu, getFile };
