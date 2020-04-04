import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionForm from  './QuestionForm';
import QuestionStats from './QuestionStats';
import NoMatchFound from './NoMatchFound';
import {Redirect} from "react-router-dom";

//Import no match found component

class Poll extends Component {

    render() {

        if (this.props.authedUser === null) {
            return <Redirect to='/login' />
        }

        const authedUser = this.props.authedUser;
        const questions = this.props.questions;

        //set question from ID passed through from routing.
        const id = this.props.match.params.question_id;

        //check if id exists within the question keys.
        const matchFound = Object.keys(questions).includes(id);
        const users = this.props.users
        const question = questions[id];
        const author = question.author;
        const authorObject = users[author];
        const name = authorObject.name;
        const pickeOptionOne = question.optionOne.votes.includes(this.props.authedUser);
        const pickeOptionTwo = question.optionTwo.votes.includes(this.props.authedUser);

        console.log('authorObject', authorObject);

        const questionObject = {
            id: question.id,
            author: name,
            avatarURL: authorObject.avatarURL,
            optionOneText: question.optionOne.text,
            optionTwoText: question.optionTwo.text,
            optionOneTotal: question.optionOne.votes.length,
            optionTwoTotal: question.optionTwo.votes.length,
            totalVotes: (question.optionOne.votes.length + question.optionTwo.votes.length),
            optionOnePercent: ((question.optionOne.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length))*100),
            optionTwoPercent: ((question.optionTwo.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length))*100),
            pickedOptionOne: pickeOptionOne,
            pickedOptionTwo: pickeOptionTwo
        }

        const isAnswered =
            question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser);

        let render = null;

        if (!matchFound) {
            render = <NoMatchFound />
        } else if (matchFound && !isAnswered) {
            render = <QuestionForm question={questionObject}/>
        } else if (matchFound && isAnswered) {
            render = <QuestionStats question={questionObject}/>
        }

        //map over the users for each question in order to obtain name and avatar.
        return (
            <div>
                <h3>Poll</h3>
                {render}
            </div>
        )
    }
}


function mapStateToProps ({authedUser, questions, users}) {
    return {
        questions,
        authedUser,
        users
    };
}

// invoke second function that is returned and passing it in Dashboard
export default connect(mapStateToProps)(Poll)