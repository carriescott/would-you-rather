import React, { Component } from 'react';

class User extends Component {

    render() {
        const user = this.props.user;
        return (

            <section className='card' id='user-score-container'>
                <div className='col' id='user-score-contents'>
                    <div className='name-container'>
                        <p>{user.name}</p>
                    </div>
                    <div className='question-information'>
                        <div className='col'>
                            <img className='avatar'
                                 src={user.avatar}
                                 alt={`Avatar of ${user.name}`}
                            />
                        </div>
                        <div className='col score-text'>
                            <p>Answered: {user.numberAnswered}</p>
                            <p>Asked: {user.numberAsked}</p>
                        </div>
                        <div className='score'>
                            <h1>{user.score}</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default User