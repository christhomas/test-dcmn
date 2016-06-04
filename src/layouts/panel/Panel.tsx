import * as React from "react";
import {Grid, Row} from "react-bootstrap-typescript";

import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

import "./Panel.less";

export default class Panel extends React.Component<IPanelProps, any> {
    public render () {
        return (
            <Grid fluid className="layout-panel">
                <Menu />

                <main className="content-area">
                    <Header />

                    <noscript>
                        <div className="alert alert-block col-sm-10">
                            <h4 className="alert-heading">Warning!</h4>
                            <p>You need to have JavaScript enabled to use this site.</p>
                        </div>
                    </noscript>

                    <Row>
                        {this.props.children}
                    </Row>

                    <Footer />
                </main>
            </Grid>
        )
    }

    private getClassName(): string {
        return ["layout-panel", this.props.className].join(" ");
    }
}

interface IPanelProps {
    className?: string;
}