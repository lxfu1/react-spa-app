import { registerApplication, start } from "single-spa";

registerApplication({
  name: "micro1",
  app: () => window.System.import("@ant/react-app1"),
  activeWhen: ["/react1"],
});

registerApplication({
  name: "micro2",
  app: () => window.System.import("@ant/react-app2"),
  activeWhen: ["/react2"],
});

start({
  urlRerouteOnly: true,
});
