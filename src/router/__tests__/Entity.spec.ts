import Entity from "../Entity";

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

(Entity.component as any) = Component;

describe("@/router/Entity", () => {
  let app;
  let mockRoute;
  beforeEach(() => {
    (mockRoute = Entity), (app = (global as any).createVueRouter([mockRoute]));
  });
  it("exports a valid Vue Router", () => {
    const wrapper = (global as any).mount(App, app);
    app.router.push({ name: Entity.name });
    expect(wrapper.find(Component).exists()).toBe(true);
  });
});
