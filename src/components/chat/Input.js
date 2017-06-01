import React, {Component} from 'react';
import './Input.css';

export default class Input extends Component {
    render() {
        return (
            <textarea className="message-input" id="input" placeholder={'type text here...'}></textarea>
        );
    }
}