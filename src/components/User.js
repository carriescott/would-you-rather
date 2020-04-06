import React, { Component } from 'react';

class User extends Component {

    render() {
        const user = this.props.user;
        //map over the users for each question in order to obtain name and avatar.
        return (

            <div className='card'>
                <div className='col'>
                    <div className='name-container'>
                        <p>{user.name}</p>
                    </div>

                    <div className='question-information'>
                        <div className='col'>
                            <img className='avatar'
                                 src={user.avatar}
                                 alt={'Avatar of ${name}'}
                            />
                        </div>
                        <div className='col scoreText'>
                            <p>Answered: {user.numberAnswered}</p>
                            <p>Asked: {user.numberAsked}</p>
                        </div>
                        <div className='score'>
                            <h1>{user.score}</h1>
                        </div>

                    </div>

                </div>
            </div>



        )
    }
}
export default User