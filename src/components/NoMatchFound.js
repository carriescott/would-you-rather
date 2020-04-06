import React, { Component } from 'react';

class NoMatchFound extends Component {

    render() {
        return (
            <section className='center' id='no-match-found'>
                <img src='https://gravatar.com/avatar/b9106a873e394fa182f827e720b43266?s=200&d=robohash&r=x'
                    alt='No match found'
                />
                <p>Oops!</p>
                <p>We can't find that one ... sorry, please try another one</p>
            </section>
        )
    }
}

export default NoMatchFound