import * as React from "react";

import "./Footer.less";

export default class Footer extends React.Component<any, any> {
    public render () {
        return (
            <footer className="clearfix">
                <ul>
                    <li><a href="http://dcmn.de" alt="DCMN Dashboard">DCMN Dashboard</a></li>
                    <li><a href="/help" alt="Help">Help</a></li>
                    <li><a href="/faq" alt="Frequently Asked Questions">FAQ</a></li>
                    <li><a href="/contact-is" alt="Contact Us">Contact Us</a></li>
                </ul>
            </footer>
        )
    }
}