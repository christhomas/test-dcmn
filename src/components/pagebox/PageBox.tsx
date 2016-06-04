import * as React from "react";
import { Button } from "react-bootstrap-typescript";
import { Icon } from "react-fa";

import "./PageBox.less";

export default class PageBox extends React.Component<PageBoxProps, any> {
    public render () {
        return (
            <div className={this.getClassName()}>
                <div className="panel-heading">
                    <h2>{this.props.title}</h2>
                    <Button type="button"
                            onClick={this.handleDelete.bind(this)}>
                        <Icon name="close" />
                    </Button>
                </div>

                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        )
    }

    private getClassName(): string {
        return ["page-box","panel"].join(" ");
    }

    private handleDelete():void {
        this.props.onDelete(this.props.index);
    }
}

interface PageBoxProps {
    title?: string;
    children?: React.ReactElement<any>[];
    onDelete: Function;
    index: number;
}