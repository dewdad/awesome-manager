import { IAppConfig } from "./config/IAppConfig";

export interface IAppState {
  locale: string;
  config: IAppConfig;
  defaultMessages: any;
  redirectTo: string;
  cookieConsentVersion: string;
}

export const AppDefaultState = (): IAppState => {
  return {
    locale: "",
    config: {
      api: {
        baseUrl: "",
      },
      features: {
        disableParticles: false,
      },
    },
    defaultMessages: {},
    redirectTo: "",
    cookieConsentVersion: "",
  };
};
