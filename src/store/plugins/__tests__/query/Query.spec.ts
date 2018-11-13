import { Query, Model } from "@vuex-orm/core";

const createStore = (global as any).createORMStore;
describe("Unit – Query", () => {
  class User extends Model {
    static entity = "users";
  }

  class Post extends Model {
    static entity = "posts";
  }

  const users = {};

  const posts = {};

  it("can retrieve all models from the database instance", () => {
    createStore([{ model: User }, { model: Post }]);

    const models = new Query({ $name: "users" }, "users").getModels();

    expect(models.users).toBe(User);
    expect(models.posts).toBe(Post);
  });

  it("can retrieve a specific model from the database instance", () => {
    createStore([{ model: User }, { model: Post }]);

    const model = new Query({ $name: "users" }, "users").getModel("posts");

    expect(model).toBe(Post);
  });

  it("retrieves the model correspondes to the entity of Query if the name is not specified", () => {
    createStore([{ model: User }, { model: Post }]);

    const model = new Query({ $name: "users" }, "users").getModel();

    expect(model).toBe(User);
  });

  it("can retrieve all modules from the database instance", () => {
    createStore([{ model: User, module: users }, { model: Post, module: posts }]);

    const modules = new Query({ $name: "users" }, "users").getModules();

    expect(modules.users).toBe(users);
    expect(modules.posts).toBe(posts);
  });

  it("can retrieve a specific modules from the database instance", () => {
    createStore([{ model: User, module: users }, { model: Post, module: posts }]);

    const module = new Query({ $name: "users" }, "users").getModule("posts");

    expect(module).toBe(posts);
  });

  it("retrieves the module correspondes to the entity of Query if the name is not specified", () => {
    createStore([{ model: User, module: users }, { model: Post, module: posts }]);

    const module = new Query({ $name: "users" }, "users").getModule();

    expect(module).toBe(users);
  });
});
