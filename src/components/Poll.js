import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionForm from  './QuestionForm';
import QuestionStats from './QuestionStats';
import NoMatchFound from './NoMatchFound';

//Import no match found component

class Poll extends Component {

    render() {
        const users = this.props.users
        const authedUser = this.props.authedUser;
        const questions = this.props.questions;
        const questionsTest = Object.values(questions);
        const question = questionsTest[5];
        const author = question.author;
        const authorObject = users[author];
        const pickeOptionOne = question.optionOne.votes.includes(this.props.authedUser);
        const pickeOptionTwo = question.optionTwo.votes.includes(this.props.authedUser);

        const questionObject = {
            id: question.id,
            avatarURL: authorObject.avatarURL,
            optionOneText: question.optionOne.text,
            optionTwoText: question.optionTwo.text,
            optionOneTotal: question.optionOne.votes.length,
            optionTwoTotal: question.optionTwo.votes.length,
            totalVotes: (question.optionOne.votes.length + question.optionTwo.votes.length),
            optionOnePercent: (question.optionOne.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length)),
            optionTwoPercent: (question.optionTwo.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length)),
            pickedOptionOne: pickeOptionOne,
            pickedOptionTwo: pickeOptionTwo
        }

        const isAnswered =
            question.optionOne.votes.includes(this.props.authedUser) ||
            question.optionTwo.votes.includes(this.props.authedUser);

        console.log('isAnswered', isAnswered);

        // const authorObject =
        // const answered

        // if (!isAnswered) {
        //     renderQuestion = <QuestionForm question={question} />;
        // } else {
        //     renderQuestion = <QuestionStats question={question} />;
        // }

        //map over the users for each question in order to obtain name and avatar.
        return (
            <div>
                <h3>Poll</h3>
                <QuestionForm question={questionObject}/>
                <QuestionStats question={questionObject}/>
                <NoMatchFound />
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