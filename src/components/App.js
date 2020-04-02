import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Navbar from './Navbar';
import Dashboard from './Dashboard'
import Login from './Login';
import '../App.css';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <div>
            <Navbar />
            <Login />
            <Dashboard />
        </div>
    );
  }
}

export default connect()(App);
