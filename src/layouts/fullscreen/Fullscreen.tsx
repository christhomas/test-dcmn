import * as React from "react";
import {Grid} from "react-bootstrap-typescript";

export default class Fullscreen extends React.Component<IFullscreenProps, any> {
    public render () {
        return (
            <Grid className={this.getClassName()} fluid={true}>
                {this.props.children}
            </Grid>
        )
    }

    private getClassName(): string {
        return ["layout-fullscreen",this.props.className].join(" ");
    }
}

interface IFullscreenProps {
    className?: string;
}