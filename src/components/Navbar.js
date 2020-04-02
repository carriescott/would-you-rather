import React, { Component } from 'react';
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
        return (
            <div>
                <img className='userAvatar' src={avatar}/>
                <h3>{userName}</h3>
                <button>Logout</button>
            </div>
        )
    }
}


function mapStateToProps ({authedUser, users}) {
    // check if user is authorised
    // userIsAuthed: authedUser !== null,
    return {
        userName: authedUser ? users[authedUser].name : null,
        userAvatar: authedUser ? users[authedUser].avatarURL : null
    };
}

export default connect(mapStateToProps)(Navbar)