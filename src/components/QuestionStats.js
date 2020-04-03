import React, { Component } from 'react';

//controlled component
class QuestionStats extends Component {

    render() {
        const question = this.props.question;
        const selectedOption = question.pickedOptionOne ?
            question.optionOneText : question.optionTwoText;
        return (
            <div className='center'>
                <div className='card'>
                    <p>Would you rather?</p>
                    <img className='avatar' src={question.avatarURL}/>

                    <p>Option One: {question.optionOneText}</p>
                    <p>Votes: {question.optionOneTotal}/{question.totalVotes}</p>
                    <p>Percentage: {question.optionOnePercent}</p>

                    <p>Option Two: {question.optionTwoText}</p>
                    <p>Votes: {question.optionTwoTotal}/{question.totalVotes}</p>
                    <p>Percentage: {question.optionTwoPercent}</p>

                    <p>You would rather {selectedOption}</p>

                </div>
            </div>
        )
    }
}

// invoke second function that is returned and passing it in Dashboard
export default QuestionStats