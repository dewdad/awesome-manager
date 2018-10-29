/**
 * Definition for vuetify
 */

declare module "vuetify/es5/util/*" {
  interface colors {
    base: string;
    lighten5: string;
    lighten4: string;
    lighten3: string;
    lighten2: string;
    lighten1: string;
    darken1: string;
    darken2: string;
    darken3: string;
    darken4: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
  }

  const red: colors;
  const pink: colors;
  const purple: colors;
  const deepPurple: colors;
  const indigo: colors;
  const blue: colors;
  const lightBlue: colors;
  const cyan: colors;
  const teal: colors;
  const green: colors;
  const lightGreen: colors;
  const lime: colors;
  const yellow: colors;
  const amber: colors;
  const orange: colors;
  const deepOrange: colors;
  const brown: colors;
  const blueGrey: colors;
  const grey: colors;

  interface shades {
    black: string;
    white: string;
    transperent: string;
  }

  const shades: shades;
}

/**
 * Definitions
 */

declare module "netlify-auth-providers";

declare module "vue-mdc-adapter";

declare module "trello";
declare module "chartist";

declare module "vue-quill-editor";
declare module "vue-clickaway";

declare module "@fortawesome/vue-fontawesome";
declare module "@fortawesome/fontawesome-svg-core";
declare module "@fortawesome/free-solid-svg-icons";
declare module "@fortawesome/free-brands-svg-icons";

/**
 * Definitions
 */
declare module "vue-cli-plugin-apollo/graphql-client";

declare module "fs-extra";

declare module "papaparse";

declare module "papaparse/papaparse.js";

declare module "nedb-promise";
//  {
//   // import Database from "Nedb";
//   // export default Database;
// }

declare module "request";

/**
 * Definition for vuex-pathify
 */

declare module "vuex-pathify" {
  interface options {
    [x: string]: any;
    mapping: string;
    strict: boolean;
    cache: boolean;
    deep: number;
  }

  const options: options;

  function plugin(store: any): void;

  function debug(): void;

  // component helpers
  function get(path: string, props?: string[] | object): Function | Object;

  function set(path: string, props?: string[] | object): Function | Object;

  function sync(path: string, props?: string[] | object): Function | Object;

  function call(path: string, props?: string[] | object): Function | Object;

  // Payload class
  class Payload {
    constructor(path: string, value: any);

    update(target: object): void;
  }

  // vuex aliases
  function commit(...args: any[]): void;

  function dispatch(...args: any[]): void;

  // store helper

  export namespace make {
    function actions(state: object, only?: string | string[] | object): object;

    function getters(state: object, only?: string | string[] | object): object;

    function mutations(state: object, only?: string | string[] | object): object;
  }
}
