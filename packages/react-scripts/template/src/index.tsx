import * as React from "react";
import * as ReactDOM from "react-dom";
import RootRouter from "./routes/index";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<RootRouter />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
