export const ormCRUDPlugin = (options: any) => {
  return (store: any) => {
    let namespace = options.namespace || "";
    store.dispatch(`entities/${namespace}/insert`, {
      data: {
        content: "YYY",
      },
    });
    store.dispatch(`entities/${namespace}/update`, {
      id: "",
      content: "ZZZ",
    });
    store.dispatch(`entities/${namespace}/delete`, {
      id: "",
    });
    store.dispatch(`entities/${namespace}/read`, {});
  };
};

export default ormCRUDPlugin;
