import React, {Component} from 'react';
import './Information.css';
import Navigation from "../Navigation/Navigation";


export default class Information extends Component {
    render() {
        return (
            <div className="information-container">
                <Navigation/>
                {this.props.children}
            </div>

        );
    }
}