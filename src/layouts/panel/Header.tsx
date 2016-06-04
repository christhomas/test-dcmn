import * as React from "react";

import "./Header.less";

export default class Header extends React.Component<any, any> {
    public render () {
        return (
            <header className="clearfix">
                <div className="brand col-xs-12 col-sm-4">
                    <img src="src/image/dcmn.png" alt="DCMN" />
                </div>

                <div className="login col-xs-12 col-sm-8">
                    <span>Welcome back, Christopher Thomas</span>
                </div>
            </header>
        )
    }
}