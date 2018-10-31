interface IPayload {
    [key: string] : any
}

type ommit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type PayloadProps = Pick<IPayload, "id"|"name">

export const CheckInterfacePlugin = (options: any) => {
  return (store: any) => {
    let namespace = options.namespace || "";
    // use proper interface
    if(namespace === "activity") {
        // use ActiviyInterface
    }
    // Every Mutations will be logged
    store.subscribe((mutation: any) => {
        if(mutation.type === `{namespace}/actionCreate`) {
            return type of mutation.payload === PayloadInterface? true: false
        }
        if(mutation.type === `{namespace}/actionDelete`) {
            return type of mutation.payload === PayloadInterface? true: false
        }
        if(mutation.type === `{namespace}/actionRead`) {
            return type of mutation.payload === PayloadInterface? true: false
        }
        if(mutation.type === `{namespace}/actionUpdate`) {
            return type of mutation.payload === PayloadInterface? true: false
        }
    });
  };
};
