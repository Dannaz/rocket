import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css'

export default class Button extends Component {
    render() {
        return (
            <button
                className="btn btn-small default btn-right-aligned"
                onClick={this.props.clickHandler}
            >
                {this.props.buttonText}
            </button>
        );
    }
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
};