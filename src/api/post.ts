import { ArticleNode } from "@/api/prisma";

export const posts: ArticleNode[] = [
  {
    id: "",
    author: "",
    title: "A sample post with image",
    description: "Simple description",
    text: "Vue is awesome!!!!",
    featuredImage: "/public/discover_word/thumb/ds_3.jpg",
    isPublished: true,
    tags: ["vue"],
    publishDate: "2018-10-12",
  },
];

export const getPost = limit => {
  return limit ? posts.slice(0, limit) : posts;
};

export default { posts, getPost };
