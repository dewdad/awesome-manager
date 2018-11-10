// Useful types
declare type UnRequiredKeys<T> = { [P in keyof T]?: T[P] };

// Keep types the same, but make each property to be read-only.
declare type ReadOnly<T> = { readonly [P in keyof T]: T[P] };
// Same property names, but make the value a promise instead of a concrete one
declare type Deferred<T> = { [P in keyof T]: Promise<T[P]> };
// Wrap proxies around properties of T
declare type Proxify<T> = { [P in keyof T]: { get(): T[P]; set(v: T[P]): void } };

// Useful functions
declare function assign<T>(obj: T, props: Partial<T>): void;
declare function freeze<T>(obj: T): Readonly<T>;

/*
 * From T pick a set of properties K
 */
declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

/*
 * For every properties K of type T, transform it to U
 */
declare function mapObject<K extends string, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U>;
/*
 * From T pick a set of properties K
 * const nameAndAgeOnly = pick(person, "name", "age");  // { name: string, age: number }
 */
declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

/*
 * For every properties K of type T, transform it to U
 * const names = { foo: "hello", bar: "world", baz: "bye" };
 * const lengths = mapObject(names, s => s.length);  // { foo: number, bar: number, baz: number }
 */
declare function mapObject<K extends string, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U>;

declare function objectKeyType<T, K extends keyof T>(obj: T, key: K): any;
declare function createComponentMocks({ store, router, style, mocks, stubs }): void;
