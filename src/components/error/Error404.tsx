import * as React from "react";
import {Row, Col} from "react-bootstrap-typescript";
import Layout from "../../layouts/fullscreen/Fullscreen";

export default class Error404 extends React.Component<any, any> {
    public render () {
        return (
            <Layout className="error404">
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={4} mdOffset={4} className="panel">
                        <div className="panel-heading">
                            <h3>Page Not Found</h3>
                        </div>

                        <div className="panel-body">
                            <p>Sorry, but this page was not found</p>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}