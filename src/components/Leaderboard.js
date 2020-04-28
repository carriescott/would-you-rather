import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from "./User";
import { Redirect } from "react-router-dom";

class Leaderboard extends Component {

    render() {
        const location = this.props.location.pathname;
        if (this.props.authedUser === null) {
            return <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            />
        }
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

        return (
            <section className='center' id='leaderboard'>
                <h3>Leaderboard</h3>
                <ul>
                    {formatUsers.map((user) => (
                        <li key={user.id}>
                            <User user={user} />
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

function mapStateToProps ({users, authedUser}) {
    return {
        users,
        authedUser
    };
}

export default connect(mapStateToProps)(Leaderboard)
