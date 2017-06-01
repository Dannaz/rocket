import React, {Component} from 'react';
import { Link } from 'react-router';
import './Navigation.css';


export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/bills" activeClassName="active">Счета</Link>
                <Link to="/deposits" activeClassName="active">Вклады</Link>
            </div>
        );
    }
}