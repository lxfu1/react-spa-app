import React from "react";
import ReactDOM from "react-dom";
import ReactDOMCilent from "react-dom/client";
import RootComponent from "./App";
import singleSpaReact, { SingleSpaContext } from "single-spa-react";

// @ts-ignore
if (!window.System) {
  const root = ReactDOMCilent.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <RootComponent />
    </React.StrictMode>
  );
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent,
  errorBoundary() {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
