import "styles/global.scss";
import { Router } from "next/dist/client/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
