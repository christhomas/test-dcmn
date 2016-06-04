import * as React from "react";
import { Col } from "react-bootstrap-typescript";
import Layout from "../layouts/panel/Panel";
import TopBox from "../components/topbox/TopBox";
import PageBox from "../components/pagebox/PageBox";

export default class Dashboard extends React.Component<any, any> {
    public render () {
        return (
            <Layout>
                {this.renderTopbox()}
                {this.renderWidgets()}
            </Layout>
        )
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
}