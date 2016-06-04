import * as React from "react";
import { FormControl } from "react-bootstrap-typescript";

import "./Header.less";

export default class Header extends React.Component<any, any> {
    public render () {
        return (
            <header className="clearfix">
                <div className="brand col-xs-12 col-sm-4">
                    <img src="src/image/dcmn.png" alt="DCMN" />
                </div>

                <div className="login col-xs-12 col-sm-8">
                    <span>Welcome back, Christopher Thomas</span>
                </div>

                <div className="col-xs-12 clearfix">
                    <h1 className="col-xs-12 col-sm-6">Overview</h1>

                    <div className="add-widget col-xs-12 col-sm-6">
                        <label id="add-widget">Text:</label>
                        <FormControl type="text" name="add-widget" placeholder="Type text for new widget"/>
                        <button className="btn btn-primary">Add Widget</button>
                    </div>
                </div>
            </header>
        )
    }
}