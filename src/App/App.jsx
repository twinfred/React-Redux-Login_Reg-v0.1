import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>Hello World</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);

export { connectedApp as App };