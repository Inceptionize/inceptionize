import ReactGA from "react-ga";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

export const initGA = (): void => {
  ReactGA.initialize("UA-169236210-1");
};

export const initGAPerComponent = (): void => {
  if (!window.GA_INITIALIZED) {
    initGA();
    window.GA_INITIALIZED = true;
  }
};

export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
