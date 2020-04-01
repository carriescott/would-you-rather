import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

class Login extends Component {

    state = {
        value: '-',
        loading: false,
    }

    // set the user in the state object
    // take in the previous state in order to set new state
    setUser = (event) => {
        this.setState({
            value: event
        });
    }

    //Update route when promise has been returned
    handleSubmit = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        const AUTHED_ID = this.state.value;
        dispatch(setAuthedUser(AUTHED_ID));
    }


    // When the component first initialises clear the AUTHED_ID
    render() {
        const users = this.props.users;
        const names = Object.keys(users);
        return (
            <div>
                <h3 className='center'>Please Login?</h3>
                <div>
                    <form onSubmit={(event) => this.handleSubmit(
                        event)}>
                        <select
                            value={this.state.value}
                            onChange={(event) => this.setUser(
                            event.target.value)}>
                            <option>-</option>
                            {names.map(name => (
                                <option key={users[name].id} value={users[name].name}>
                                    {users[name].name}
                                </option>
                            ))}
                        </select>
                        <button type="submit"
                            disabled={this.state.value === '-'}>
                            Login
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}

// Return users from the redux store
function mapStateToProps({users}) {
    return {
        users,
    };
}

// invoke second function that is returned and passing it in Login
export default connect(mapStateToProps)(Login)