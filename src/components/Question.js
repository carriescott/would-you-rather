import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from  'react-router-dom';

class Question extends Component {

    state = {
        question: this.props.question
    }

    toQuestion = (e, id) => {
        e.preventDefault()
    //   redirect to question
    }

    render() {
        const question = this.props.question;
        const name = this.props.users[question.author].name;
        const avatar = this.props.users[question.author].avatarURL;

        if (question === null) {
            return <p>This Question doesn't exist</p>
        }

        console.log('props', this.props);

        //map over the users for each question in order to obtain name and avatar.
        return (
            <div className='card'>
                <h3>Would You Rather?</h3>
                <p>{name}</p>
                <img className='avatar'
                     src={avatar}
                     alt={'Avatar of ${name}'}
                />
                <p> ...{question.optionOne.text}... </p>
                <button onClick={(e) => this.toQuestion(e, question.id)}>
                    View
                </button>
            </div>
        )
    }
}


function mapStateToProps ({users}) {
    return {
        users,
    };
}

// invoke second function that is returned and passing it in Dashboard
export default connect(mapStateToProps)(Question)