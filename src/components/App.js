import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Navbar from './Navbar';
import Dashboard from './Dashboard'
import Login from './Login';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Poll from './Poll';
import LoadingBar from 'react-redux-loading';
import NoPageFound from './NoPageFound';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <Router>
            <Fragment>
                <LoadingBar />
                    <div>
                        <Navbar />
                        <div>
                            {this.props.loading === true
                                ? null
                                :
                            <Route
                                path='/' exact
                                component={Dashboard}
                            />}
                            <Route
                                path='/login'
                                exact component={Login}
                            />
                            <Route
                                path='/leaderboard'
                                exact component={Leaderboard}
                            />
                            <Route
                                path='/questions/:question_id'
                                exact component={Poll} />
                            <Route
                                path='/add'
                                exact component={NewQuestion}
                            />
                            <Route
                                path='/404'
                                exact component={NoPageFound}
                            />
                        </div>
                        {/*}*/}
                    </div>
            </Fragment>
        </Router>
    )
  }
}

function mapStateToProps ({authedUser, users, questions, loadingBar}) {
    return{
        users,
        questions,
        authedUser,
        loadingBar,
        loading: loadingBar.default === 1,
        isAuthed: authedUser !== null
    }
}

export default connect(mapStateToProps)(App);
