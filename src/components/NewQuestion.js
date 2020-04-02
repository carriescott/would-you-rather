import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleSaveQuestion} from "../actions/questions";

//controlled component
class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
    }


    handleChangeOptionOne = (e) => {
        const optionOne = e.target.value

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
        dispatch(handleSaveQuestion(question))
        //return state to ''
        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))
    }

    render() {
        const optionOne = this.state.optionOne;
        const optionTwo = this.state.optionTwo;
        // todo redirect to home view when submitted
        console.log(this.props);
        return (
            <div className='center'>
                <h3 className='center'>Would You Rather ... </h3>
                <p>To create a new question, enter two options in the text fields provided</p>
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