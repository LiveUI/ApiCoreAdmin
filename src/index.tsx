import "bootstrap/dist/css/bootstrap.css";
import "src/index.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import InnerBase from "./components/screens/basic/InnerBase";
import registerServiceWorker from "./registerServiceWorker";

const element = <InnerBase />;

ReactDOM.render(element, document.getElementById("root"));
registerServiceWorker();
