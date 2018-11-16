import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vuex from "vuex";

import Login from "@/pages/Login.vue";
import AccountModel from "@/api/models/Account";
import AccountModule from "@/store/modules/Account";

const store = (global as any).createORMStore(
  [{ model: AccountModel, module: AccountModule }],
  "entities",
);

function mountLogin() {
  return (global as any).shallowMountView(Login, {
    ...(global as any).createComponentMocks({
      store: {
        ...store,
        auth: {
          actions: {
            logIn(_, { username, password }) {
              if (username === "embajadachina" && password === "embajadachina") {
                return Promise.resolve("testToken");
              } else {
                return Promise.reject(new Error("testError"));
              }
            },
          },
        },
      },
    }),
  });
}

const localVue = createLocalVue();

const $route = {
  meta: {
    public: false,
  },
};

const model = {
  name: "embajadachina",
  password: "embajadachina",
  email: "embajachina@gmail.com",
  hash: "",
  role: "manager",
};

localVue.use(Vuex);
localVue.use(Vuetify);

describe("Login Vue Component Testing", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        "account/currentItem": {},
        "account/items": [],
      },
      actions: {
        "account/signup": jest.fn((state, payload) => {
          return true;
        }),
      },
    });

    wrapper = shallowMount(Login, {
      localVue,
      store,
      mocks: {
        $route,
      },
    });
  });

  describe("Login page Test", () => {
    it("should display login button", () => {
      expect(wrapper.isVueInstance()).toBe(true);
      expect(wrapper.vm.$data.loading).toBe(false);
      expect(wrapper.vm.$data.model).toEqual(model);
    });
  });

  describe("Login Button Test", () => {
    it("signup should set loading", async () => {
      await wrapper.vm.login();
      // will call signup, which is mocked and set loading as true
      expect(wrapper.vm.$data.loading).toEqual(true);
    });
  });

  describe("Login Failed events Test", () => {
    it("should emit failed events", () => {
      wrapper.vm.$emit("APP_LOGIN_FAILED");
      console.log(wrapper.emitted());
      expect(wrapper.emitted("APP_LOGIN_FAILED").length).toBeGreaterThan(0);
    });
  });

  it("is a valid component", () => {
    expect(Login).toBeAComponent();
  });

  it("will trigger login from createComponentMocks", async () => {
    const { vm } = mountLogin();

    vm.username = model.name;
    vm.password = model.password;

    const routerPush = jest.fn();
    vm.$router = { push: routerPush };
    vm.$route = { query: {} };
    await wrapper.vm.login();
    // will call signup, which is mocked and set loading as true
    expect(wrapper.vm.$data.loading).toEqual(true);
  });
});
