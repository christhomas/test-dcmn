import * as React from "react";
import * as _ from "lodash";
import { Col, FormControl } from "react-bootstrap-typescript";
import Layout from "../../layouts/panel/Panel";
import TopBox from "../../components/topbox/TopBox";
import PageBox from "../../components/pagebox/PageBox";

import "./Dashboard.less";

export default class Dashboard extends React.Component<any, DashboardState> {
    public constructor(props) {
        super(props);

        this.state = {};
    }

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
                                 onChange={this.setWidgetText.bind(this)}
                                 onKeyPress={this.handleEnter.bind(this)}
                                 value={this.state.text} />
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
                <div key={"topbox-"+(output.length+1)}>
                    <Col xs={6} sm={3}>
                        <TopBox colour={item.colour}>
                            <span>{item.amount}</span>
                            <span>{item.text}</span>
                        </TopBox>
                    </Col>
                </div>
            );
        });

        return output;
    }

    private renderWidgets(): React.ReactElement<any>[] {
        let output: React.ReactElement<any>[] = [];

        if(this.state.widgets){
            this.state.widgets.forEach(item => {
                output.push(
                    <div key={"pagebox-"+(output.length+1)}>
                        <Col xs={12} sm={6}>
                            <PageBox title={item.title}
                                     onDelete={this.handleDelete.bind(this)}
                                     index={output.length}>
                                {item.content}
                            </PageBox>
                        </Col>
                    </div>
                )
            });
        }

        return output;
    }

    private handleEnter(event:any):void {
        if (event.charCode == 13) {
            this.createWidget();
        }
    }

    private handleDelete(index:number):void {
        let widgets: WidgetData[] = _.cloneDeep(this.state.widgets);

        _.pullAt(widgets,index);

        this.setState({widgets});
    }

    private setWidgetText(event:any):void {
        this.setState({
            text: event.target.value
        });
    }

    private createWidget() {
        if(this.state.text.length){
            let widgets: WidgetData[] = _.cloneDeep(this.state.widgets || []);

            let item: WidgetData = {
                title: "Custom Widget: "+(new Date().toLocaleTimeString()),
                content: this.state.text
            };

            widgets.push(item);

            this.setState({
                text: "",
                widgets
            });
        }
    }
}

interface WidgetData {
    title: string;
    content: string;
}

interface DashboardState {
    text?: string;
    widgets?: WidgetData[];
}