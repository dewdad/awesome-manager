interface IPayload {
  [key: string]: any;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type PayloadProps = Pick<IPayload, "id" | "name">;
type PayloadOmmitedProps = Omit<IPayload, "id" | "name">;

export const CheckInterfacePlugin = (options: any) => {
  return (store: any) => {
    let namespace = options.namespace || "";
    // use proper interface
    if (namespace === "activity") {
      // use ActiviyInterface
    }
    // Every Mutations will be logged
    store.subscribe((mutation: any) => {
      if (mutation.type === `{namespace}/actionCreate`) {
        // return typeof mutation.payload === IPayload ? true : false;
      }
      if (mutation.type === `{namespace}/actionDelete`) {
        // return typeof mutation.payload === IPayload ? true : false;
      }
      if (mutation.type === `{namespace}/actionRead`) {
        // return typeof mutation.payload === IPayload ? true : false;
      }
      if (mutation.type === `{namespace}/actionUpdate`) {
        // return typeof mutation.payload === IPayload ? true : false;
      }
    });
  };
};
