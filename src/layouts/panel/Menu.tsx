import * as React from "react";
import { Col } from "react-bootstrap-typescript";

import "./Menu.less";

export default class Menu extends React.Component<any, any> {
    public render () {
        return (
            <nav className="menu-side">
                <section className="dashboard">

                </section>

                <section className="hover">

                </section>

                <div className="background" />

                <button type="button" className="menu-button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="glyphicon glyphicon-align-justify"/>
                </button>

                <button type="button" className="user-button">
                    <span>CT</span>
                </button>
            </nav>
        )
    }
}