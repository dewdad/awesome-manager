import Manual from "../Manual";

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

(Manual.component as any) = Component;

describe("@/router/Manual", () => {
  let app;
  let mockRoute;
  beforeEach(() => {
    (mockRoute = Manual), (app = (global as any).createVueRouter([mockRoute]));
  });
  it("exports a valid Vue Router", () => {
    const wrapper = (global as any).mount(App, app);
    app.router.push({ name: Manual.name });
    expect(wrapper.find(Component).exists()).toBe(true);
  });
});
