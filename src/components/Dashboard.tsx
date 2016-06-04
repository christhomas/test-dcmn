import * as React from "react";
import { Col, FormControl } from "react-bootstrap-typescript";
import Layout from "../layouts/panel/Panel";
import TopBox from "../components/topbox/TopBox";
import PageBox from "../components/pagebox/PageBox";

import "./Dashboard.less";

export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
    public render () {
        return (
            <Layout className="layout-dashboard">
                {this.renderHeader()}
                {this.renderTopbox()}
                {this.renderWidgets()}
            </Layout>
        )
    }

    private renderHeader(): React.ReactElement<any> {
        return (
            <div className="col-xs-12 clearfix">
                <h1 className="col-xs-12 col-sm-6">Overview</h1>

                <div className="add-widget col-xs-12 col-sm-6">
                    <label id="add-widget">Text:</label>
                    <FormControl type="text"
                                 name="add-widget"
                                 placeholder="Type text for new widget"
                                 onChange={this.setWidgetText.bind(this)} />
                    <button className="btn btn-primary"
                            onClick={this.createWidget.bind(this)}>Add Widget</button>
                </div>
            </div>
        );
    }

    private renderTopbox(): React.ReactElement<any>[] {
        let input = [
            {colour:"green",amount:"5.43€",text:"Cost per visit"},
            {colour:"grey",amount:"132",text:"New Users"},
            {colour:"red",amount:"20%",text:"Conversion Rate"},
            {colour:"orange",amount:"250",text:"Sessions per Day"},
        ];

        let output: React.ReactElement<any>[] = [];

        input.forEach(item => {
            output.push(
                <Col xs={6} sm={3}>
                    <TopBox colour={item.colour}>
                        <span>{item.amount}</span>
                        <span>{item.text}</span>
                    </TopBox>
                </Col>
            );
        });

        return output;
    }

    private renderWidgets(): React.ReactElement<any>[] {
        let input = [
            {title:"Custom Widget // Created at 12.19",content:"The content of this widget"},
            {title:"Custom Widget // Created at 13.15",content:"Another widget with more content"},
        ];

        let output: React.ReactElement<any>[] = [];

        input.forEach(item => {
            output.push(
                <Col xs={12} sm={6}>
                    <PageBox title={item.title}>
                        {item.content}
                    </PageBox>
                </Col>
            )
        });

        return output;
    }


    private setWidgetText(event:any) {
        this.setState({
            widgetText: event.target.value
        })
    }

    private createWidget(event:any) {
        if(this.state.widgetText){
            this.props.createCallback(this.state.widgetText);
        }

        this.setState({
            widgetText: null
        });
    }
}


interface DashboardProps {
    createCallback?: Function
}

interface DashboardState {
    widgetText?: string
}