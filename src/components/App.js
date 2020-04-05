import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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

      console.log('props', this.props);
      const isAuthed = this.props.isAuthed;
      // const pathTest = this.props.match.params;
      // console.log('pathTest', pathTest);

    return (
        <Router>
            <Fragment>
                <LoadingBar />
                    <div>
                        <Navbar />
                        <div>
                            {/*{this.props.loading === true*/}
                            {/*    ? null*/}
                            {/*    :*/}
                            {/*<Route*/}
                            {/*    path='/' exact*/}
                            {/*    component={Dashboard}*/}
                            {/*/>}*/}
                            <Switch>
                            <Route
                                exact
                                path='/'
                                component={Dashboard}
                            />
                            <Route
                                path='/login'
                                component={Login}
                            />
                            <Route
                                exact
                                path='/leaderboard'
                                component={Leaderboard}
                            />
                            <Route
                                exact
                                path='/questions/:question_id'
                                component={Poll} />
                            <Route
                                path='/add'
                                component={NewQuestion}
                            />
                            <Route
                                component={NoPageFound}
                            />
                            </Switch>
                        </div>
                    </div>
            </Fragment>
        </Router>
    )
  }
}

// const PrivateRoute = connect(mapStateToProps)(
//     ({ component: Component, authedUser, ...rest }) => (
//         <Route
//             {...rest}
//             render={props =>
//                 authedUser !== null ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect push to="/login" />
//                 )
//             }
//         />
//     )
// );

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
