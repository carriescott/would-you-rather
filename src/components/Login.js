import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';
import {Redirect} from "react-router-dom";

class Login extends Component {

    state = {
        value: 'Please set a user',
        redirect: false,
    }

    setUser = (event) => {
        this.setState({
            value: event
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        const AUTHED_ID = this.state.value;
        dispatch(setAuthedUser(AUTHED_ID));

        //set state redirect as true to redirect to the dashboard
        this.setState(() => ({
            value: '-',
            redirect: true
        }))
    }

    render() {

        if (this.state.redirect && this.props.authedUser) {
            return <Redirect to='/' />
        }

        const users = this.props.users;
        const names = Object.keys(users);
        return (
            <div className='card center marginTop'>
                <h3>Welcome to the Would You Rather App</h3>
                <p>Please log in to continue</p>
                <img className='imgLogin' src='https://gravatar.com/avatar/63f79fd9cd4afe69f4478e306579d16d?s=200&d=robohash&r=x'/>
                <form onSubmit={(event) => this.handleSubmit(
                    event)} className='col'>
                    <select
                        value={this.state.value}
                        onChange={(event) => this.setUser(
                        event.target.value)}>
                        <option>Please set a user</option>
                        {names.map(name => (
                            <option key={users[name].id} value={users[name].id}>
                                {users[name].name}
                            </option>
                        ))}
                    </select>
                    <button
                        className='btn margin-top-16'
                        type="submit"
                        disabled={this.state.value === 'Please set a user'}>
                        Let's Play
                    </button>
                </form>
            </div>

        )
    }
}

// return the users and authuser states from the redux store and map to props
function mapStateToProps({users, authedUser}) {
    return {
        users,
        authedUser
    };
}

export default connect(mapStateToProps)(Login)