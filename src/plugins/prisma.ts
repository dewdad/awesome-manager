import { prisma } from "@/api/prisma/index";

export default {
  install(Vue, options) {
    Vue.prototype.$prisma = prisma;
  },
};
