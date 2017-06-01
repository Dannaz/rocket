import React, {Component} from 'react'

export default class accountInfo extends Component {
    render() {
        return (
            <div>
                <h1>Hello from accountInfo</h1>
                {this.props.children}
            </div>

        );
    }
}