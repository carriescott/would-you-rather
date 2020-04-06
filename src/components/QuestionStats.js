import React, { Component } from 'react';

//controlled component
class QuestionStats extends Component {

    render() {
        const question = this.props.question;
        const selectedOption = question.pickedOptionOne ?
            question.optionOneText : question.optionTwoText;


        const optionOneSelected = (selectedOption === question.optionOneText) ? true : false;

        // if (selectedOption === question.optionOneText) {
        //     optionOneSelected = true;
        // } else {
        //     optionOneSelected = false;
        // }

        return (
            <div className='center margin-top-16'>
                <div className='card'>
                    <h3>Would you rather?</h3>
                    <img className='avatar'
                         src={question.avatarURL}
                         alt={`Avatar of ${question.author}`}/>
                    <p>Question from {question.author}</p>

                    <div className={optionOneSelected ? 'selected' : 'notSelected'}>
                        <p className='margin-tb-8'>...{question.optionOneText}...</p>
                        <p className='margin-tb-8'>Votes: {question.optionOneTotal}/{question.totalVotes}</p>
                        <h2>{question.optionOnePercent} %</h2>
                    </div>


                    <div className={optionOneSelected ? 'notSelected' : 'selected'}>
                        <p className='margin-tb-8'>...{question.optionTwoText}...</p>
                        <p className='margin-tb-8'>Votes: {question.optionTwoTotal}/{question.totalVotes}</p>
                        <h2>{question.optionTwoPercent} %</h2>
                    </div>


                    <p>You would rather {selectedOption}</p>

                </div>
            </div>
        )
    }
}

// invoke second function that is returned and passing it in Dashboard
export default QuestionStats