import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleSaveQuestion} from "../actions/questions";

//controlled component
class QuestionForm extends Component {

    state = {
        optionSelected: null,
    }

    handleChange = (e) => {
        const optionOne = e.target.value

        this.setState(() => ({
            optionOne: optionOne
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const optionSelected = this.state.optionOne;
        const author = this.props.authedUser;
        const question = {
            optionSelected,
            author
        }
        const { dispatch } = this.props;
        // add question to store
        dispatch(handleSaveQuestion(question))
        //return state to ''
        this.setState(() => ({
            optionSelected: '',
        }))
    }

    render() {
        const optionOne = this.state.optionSelected;
        const question = this.props.question;

        console.log(this.props);
        return (
            <div className='center'>
                <div className='card'>

                    <p>Select an Option</p>
                {/*<form className='new-question-form' onSubmit={this.handleSubmit}>*/}
                {/*    <input*/}
                {/*        name="optionOne"*/}
                {/*        type="text-area"*/}
                {/*        placeholder="option one"*/}
                {/*        value={optionOne}*/}
                {/*        onChange={this.handleChangeOptionOne}*/}
                {/*        className='textarea'*/}
                {/*        maxLength="60"*/}
                {/*    />*/}
                {/*    <span>or ...</span>*/}
                {/*    <input*/}
                {/*        name="optionTwo"*/}
                {/*        type="text-area"*/}
                {/*        placeholder="option two"*/}
                {/*        value={optionTwo}*/}
                {/*        onChange={this.handleChangeOptionTwo}*/}
                {/*        className='textarea'*/}
                {/*        maxLength="60"*/}
                {/*    />*/}
                {/*    <button*/}
                {/*        type='submit'*/}
                {/*        disabled={this.state.optionOne === '' || this.state.optionTwo === ''}>*/}
                {/*        Save*/}
                {/*    </button>*/}
                {/*</form>*/}
            </div>
            </div>


        )
    }
}

function mapStateToProps ({authedUser}) {

    return {
        authedUser
    };
}

// invoke second function that is returned and passing it in Dashboard
export default connect(mapStateToProps)(QuestionForm)