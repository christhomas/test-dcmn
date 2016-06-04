import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.less";

import Dashboard from "./components/Dashboard";
import Error404 from "./components/Error404";

export default class App extends React.Component<AppProps, AppState> {
    public render():React.ReactElement<any> {
        return (
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={Dashboard}/>
                <Route path="*" component={Error404}/>
            </Route>
        </Router>
        );
    }
}

interface AppProps {
    endtime?: Date;
}

interface AppState {
    endtime?: Date;
    seconds?: number;
}

ReactDOM.render(<App/>, document.getElementById("application"));