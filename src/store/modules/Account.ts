import { ActionContext } from "vuex";
import { make } from "vuex-pathify";
import Base from "@/store/modules/Base";
import defaultAccount from "@/api/models/Account";
import db from "@/api/lowdb";
import bcrypt from "bcryptjs";

const state = {
  name: "account",
  items: [],
  currentItem: defaultAccount,
  status: false,
  filter: {
    search: "",
    sort: "",
  },
  token: {
    secret: "daniel",
    simpleToken: "",
    netlifyToken: "",
    firebaseToken: "",
  },
};

const mutations: any = {
  ...make.mutations(state),
  ...Base.mutations,
};

const AccountActions = {
  async signup(ctx: ActionContext<any, any>, signupData) {
    // if exists, return
    let authedAccount = await db
      .read()
      .get(`${ctx.state.name}.data`)
      .find({ name: signupData.name })
      .value();
    if (authedAccount === undefined) {
      try {
        console.log("Account Does not Exists, creating!");
        // 1
        signupData.hash = await bcrypt.hash(signupData.password, 10);
        // 2
        let createdAccount = db
          .read()
          .get(`${ctx.state.name}.data`)
          .insert(signupData)
          .write();
        // 3
        let valid = await bcrypt.compare(signupData.password, createdAccount.hash);
        if (valid) {
          console.log("Valid password");
          ctx.dispatch("signin", createdAccount);
        } else {
          console.log("Invalid password");
          ctx.commit("SET_STATUS", false);
          return;
        }
      } catch (e) {
        throw new Error("Failed to add new account!");
      }
    } else {
      console.log("Account Exists, go ahead to login!");
      let valid = await bcrypt.compare(signupData.password, authedAccount.hash);
      if (valid) {
        console.log("Valid password");
        ctx.dispatch("signin", authedAccount);
      } else {
        console.log("Invalid password");
        ctx.commit("SET_STATUS", false);
        return;
      }
    }
  },
  async signin(ctx: ActionContext<any, any>, authData) {
    ctx.commit("SET_STATUS", true);
    ctx.commit("SET_TOKEN", {
      ...ctx.state.token,
      ...{
        simpleToken: authData.id,
      },
    });
  },
};

const actions: any = {
  ...make.actions(state),
  ...Base.actions,
  ...AccountActions,
};

const getters: any = { ...make.getters(state), ...Base.getters };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
