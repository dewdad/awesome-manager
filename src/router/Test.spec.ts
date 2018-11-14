import Test from "./Test";

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

(Test.component as any) = Component;

describe("@/router/Test", () => {
  let app;
  let mockRoute;
  beforeEach(() => {
    (mockRoute = Test), (app = (global as any).createVueRouter([mockRoute]));
  });
  it("exports a valid Vue Router", () => {
    const wrapper = (global as any).mount(App, app);
    app.router.push({ name: Test.name });
    expect(wrapper.find(Component).exists()).toBe(true);
  });
});
