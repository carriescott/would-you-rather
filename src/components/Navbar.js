import React, { Component } from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {handleRemoveAuthedUser} from "../actions/authedUser";

class Navbar extends Component {

    //Update route when promise has been returned
    //Hook up the button for logging out
    handleLogout = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(handleRemoveAuthedUser(null));
    }

    render() {

        // if (this.props.authedUser === null) {
        //     return <Redirect
        //         to={{
        //             pathname: '/login',
        //             state: { from: '/' }
        //         }}
        //     />
        // }
        const userName = this.props.userName;
        const avatar = this.props.userAvatar;
        const userIsAuthed = this.props.userIsAuthed;

        return (
            <div className='navContainer'>
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' activeClassName='active'>
                                Leaderboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add' activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {userIsAuthed ?
                    <div className='userInfo center'>
                    <div className='col userInformation' >
                        <img className='userAvatar' src={avatar}/>
                        <p>Hi {userName}</p>
                    <button className='btn' onClick={(event) => this.handleLogout(
                        event)}>Logout
                    </button>
                    </div>
                </div>:
                    null
                }
            </div>
        )
    }
}


function mapStateToProps ({authedUser, users}) {
    // check if user is authorised
    // userIsAuthed: authedUser !== null,
    return {
        userName: authedUser ? users[authedUser].name : null,
        userAvatar: authedUser ? users[authedUser].avatarURL : null,
        userIsAuthed: authedUser !== null
    };
}

export default connect(mapStateToProps)(Navbar)