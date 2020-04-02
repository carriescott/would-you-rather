import React, { Component } from 'react';

class User extends Component {

    render() {
        const user = this.props.user;
        //map over the users for each question in order to obtain name and avatar.
        return (
            <div className='card'>
                <p>{user.name}</p>
                <img className='avatar'
                     src={user.avatar}
                     alt={'Avatar of ${name}'}
                />
                <p>Score: {user.score}</p>
                <p>Answered: {user.numberAnswered}</p>
                <p>Asked: {user.numberAsked}</p>
            </div>
        )
    }
}
export default User