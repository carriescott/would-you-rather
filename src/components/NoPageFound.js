import React, { Component } from 'react';

class NoPageFound extends Component {

    render() {
        return (
            <div className='center'>
                <img src='https://gravatar.com/avatar/b9106a873e394fa182f827e720b43266?s=200&d=robohash&r=x'
                     alt='Page not found'/>
                <p>404!</p>
                <p>Page Not Found</p>
            </div>
        )
    }
}

export default NoPageFound