import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleRemoveAuthedUser } from "../actions/authedUser";

class Navbar extends Component {

    handleLogout = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(handleRemoveAuthedUser(null));
    }

    render() {

        const userName = this.props.userName;
        const avatar = this.props.userAvatar;
        const userIsAuthed = this.props.userIsAuthed;

        return (
            <div className='nav-container'>
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
                    <section className='user-info-container center'>
                        <div className='col user-info' >
                            <img className='user-avatar'
                                 src={avatar}
                                 alt={`Avatar of ${userName}`}
                            />
                            <p>Hi {userName}</p>
                            <button className='btn'
                                    onClick={(event) => this.handleLogout(
                            event)}>
                                Logout
                            </button>
                        </div>
                    </section>:
                    null
                }
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}) {
    return {
        userName: authedUser ? users[authedUser].name : null,
        userAvatar: authedUser ? users[authedUser].avatarURL : null,
        userIsAuthed: authedUser !== null
    };
}

export default connect(mapStateToProps)(Navbar)