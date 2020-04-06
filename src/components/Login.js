import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import { handleSetAuthedUser } from '../actions/authedUser';

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
        dispatch(handleSetAuthedUser(AUTHED_ID));
        this.setState(() => ({
            value: 'Please set a user',
            redirect: true
        }));
    }

    render() {

        const returnPath = this.props.location? this.props.location.state.from : '/';

        if (this.state.redirect) {
            return <Redirect to={returnPath} />
        }

        const users = this.props.users;
        const names = Object.keys(users);

        return (
            <section className='card center margin-top-40'>
                <h3>Welcome to the Would You Rather App</h3>
                <p>Please log in to continue</p>
                <img className='img-login'
                     src='https://gravatar.com/avatar/63f79fd9cd4afe69f4478e306579d16d?s=200&d=robohash&r=x'
                     alt='login'/>
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
            </section>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users,
    };
}

export default connect(mapStateToProps)(Login)