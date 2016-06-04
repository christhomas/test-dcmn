import * as React from "react";

import "./TopBox.less";

export default class TopBox extends React.Component<TopBoxProps, any> {
    public render () {
        return (
            <div className={this.getClassName()}>
                <div className="flex-center">
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

    private getClassName(): string {
        return ["top-box",this.props.colour].join(" ");
    }
}

interface TopBoxProps {
    colour: string;
    children?: React.ReactElement<any>[];
}