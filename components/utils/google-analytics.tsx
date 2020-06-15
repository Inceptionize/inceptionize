import ReactGA from "react-ga";

export const initGA = (): void => {
  ReactGA.initialize("UA-169236210-1");
};

export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
