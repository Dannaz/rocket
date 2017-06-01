import React, { Component } from 'react';
import './App.css';
import Chat from "../Chat/Chat";
import Information from "../Information/Information";
import BackgroundWorker from "../BackgroundWorker";

import { Router, Route, browserHistory } from 'react-router';
import BillsInfo from "../BillsInfo/BillsInfo";
import Deposits from "../Deposits/Deposits";

class App extends Component {
    handleClick = () => {
        fetch('api/test')
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    };

    render() {
        return (
            <div className="container">
                <Chat/>
                <Router history={browserHistory}>
                    <Route path="/" component={Information}>
                        <Route path="/bills" component={BillsInfo}>
                            <Route path="/bills/:billId"/>
                        </Route>
                        <Route path="/deposits" component={Deposits}/>
                    </Route>
                </Router>

                <BackgroundWorker/>
            </div>
        );
    }
}

export default App;
