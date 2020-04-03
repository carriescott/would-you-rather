import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import {removeAuthedUser} from "../actions/authedUser";

class Navbar extends Component {

    //Update route when promise has been returned
    //Hook up the button for logging out
    handleLogout = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(removeAuthedUser());
    }

    render() {
        const userName = this.props.userName;
        const avatar = this.props.userAvatar;
        const userIsAuthed = this.props.userIsAuthed;
        // const userIsAuthed = false;
        console.log('loggedIn', userIsAuthed);

        return (
            <div className='row'>
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
                    <div className='col'>
                    <img className='userAvatar' src={avatar}/>
                    <p>{userName}</p>
                    <button>Logout</button>
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