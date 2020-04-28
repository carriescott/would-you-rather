import React, { Component } from 'react';

class QuestionStats extends Component {

    render() {
        const question = this.props.question;
        const selectedOption = question.pickedOptionOne ? question.optionOneText : question.optionTwoText;
        const optionOneSelected = (selectedOption === question.optionOneText) ? true : false;

        return (
            <section className='center margin-top-16'>
                <section className='card'>
                    <h3>Would you rather?</h3>
                    <img className='avatar'
                         src={question.avatarURL}
                         alt={`Avatar of ${question.author}`}/>
                    <p>Question from {question.author}</p>

                    <section className={optionOneSelected ? 'selected' : 'not-selected'}>
                        <p className='margin-tb-8'>...{question.optionOneText}...</p>
                        <p className='margin-tb-8'>Votes: {question.optionOneTotal}/{question.totalVotes}</p>
                        <h2 className='margin-tb-8'>{question.optionOnePercent} %</h2>
                    </section>

                    <section className={optionOneSelected ? 'not-selected' : 'selected'}>
                        <p className='margin-tb-8'>...{question.optionTwoText}...</p>
                        <p className='margin-tb-8'>Votes: {question.optionTwoTotal}/{question.totalVotes}</p>
                        <h2 className='margin-tb-8'>{Math.round(question.optionTwoPercent)} %</h2>
                    </section>
                    <p>You would rather {selectedOption}</p>
                </section>
            </section>
        )
    }
}

export default QuestionStats
