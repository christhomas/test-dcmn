import * as React from "react";

export default class Breadcrumb extends React.Component<any, any> {
    public render () {
        return (
            <ol className="breadcrumb">
                <li><i className="fa fa-home"></i> <a href="url://home">Home</a></li>
            </ol>
        )
    }
}