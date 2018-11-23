import Generic from "../Generic";

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

(Generic.component as any) = Component;

describe("@/router/Generic", () => {
  let app;
  let mockRoute;
  beforeEach(() => {
    (mockRoute = Generic), (app = (global as any).createVueRouter([mockRoute]));
  });
  it("exports a valid Vue Router", () => {
    const wrapper = (global as any).mount(App, app);
    app.router.push({ name: Generic.name });
    expect(wrapper.find(Component).exists()).toBe(true);
  });
});
