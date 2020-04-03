import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Navbar from './Navbar';
import Dashboard from './Dashboard'
import Login from './Login';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Poll from './Poll';
import LoadingBar from 'react-redux-loading';
import '../App.css';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <div>
            <LoadingBar />
            {this.props.loading === true ? null :
                <div>
                    <Navbar />
                    {/*<Leaderboard />*/}
                    <Login />
                    {/*<NewQuestion />*/}
                    {/*<Dashboard />*/}
                    <Poll />
                </div>
            }
        </div>
    );
  }
}

function mapStateToProps ({authedUser}) {
    return{
        loading: authedUser === null
    }
}



export default connect(mapStateToProps)(App);
