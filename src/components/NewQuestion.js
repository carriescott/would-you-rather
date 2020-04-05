import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {handleSaveQuestion} from "../actions/questions";

//controlled component
class NewQuestion extends Component {

    state = {
        sent: false,
        optionOne: '',
        optionTwo: '',
    }
    
    handleChangeOptionOne = (e) => {
        const optionOne = e.target.value;

        this.setState(() => ({
            optionOne: optionOne
        }))
    }

    handleChangeOptionTwo = (e) => {
        const optionTwo = e.target.value

        this.setState(() => ({
            optionTwo: optionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const optionOneText = this.state.optionOne;
        const optionTwoText = this.state.optionTwo;
        const author = this.props.authedUser;
        const question = {
            optionOneText,
            optionTwoText,
            author
        }
        const { dispatch } = this.props;
        // add question to store
        dispatch(handleSaveQuestion(question));
        //return state to ''
        this.setState(() => ({
            sent: true,
            optionOne: '',
            optionTwo: ''
        }));
    }

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

        if (this.state.sent === true) {
            return <Redirect to='/' />
        }


        const optionOne = this.state.optionOne;
        const optionTwo = this.state.optionTwo;


        console.log(this.props);
        console.log('state', this.state);
        return (
            <div className='center'>
                <h3 className='center'>Would You Rather ... </h3>
                <p>To create a new question your options in the fields provided</p>
                <form className='new-question-form' onSubmit={this.handleSubmit}>
                    <input
                        name="optionOne"
                        type="text-area"
                        placeholder="option one"
                        value={optionOne}
                        onChange={this.handleChangeOptionOne}
                        className='textarea'
                        maxLength="60"
                    />
                    <span>or ...</span>
                    <input
                        name="optionTwo"
                        type="text-area"
                        placeholder="option two"
                        value={optionTwo}
                        onChange={this.handleChangeOptionTwo}
                        className='textarea'
                        maxLength="60"
                    />
                    <button
                        className='btn'
                    type='submit'
                    disabled={this.state.optionOne === '' || this.state.optionTwo === ''}>
                        Save
                    </button>
                </form>
            </div>


        )
    }
}

function mapStateToProps ({users, authedUser}) {

    return {
        users,
        authedUser
    };
}

// invoke second function that is returned and passing it in Dashboard
export default connect(mapStateToProps)(NewQuestion)