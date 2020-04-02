import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from "./User";

class Leaderboard extends Component {

    render() {
        const users = this.props.users;
        const keys = users ? Object.keys(users): null;

        const formatUsers =  keys !== null
            ? keys.map(key => ({
            id: users[key].id,
            name: users[key].name,
            numberAnswered: Object.keys(users[key].answers).length,
            numberAsked: users[key].questions.length,
            score: (Object.keys(users[key].answers).length + users[key].questions.length),
            avatar: users[key].avatarURL
        })).sort((a,b) => b.score - a.score) : [];

        console.log('formatUsers', formatUsers);

        return (
            <div className='center'>
                <h3>Leaderboard</h3>
                <ul>
                    {formatUsers.map((user) => (
                        <li key={user.id}>
                            <User user={user} />
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}

function mapStateToProps ({users}) {
    return {
        users,
    };
}

export default connect(mapStateToProps)(Leaderboard)