import React from 'react'
import {Link} from 'react-router-dom'

const ErrorComp = () => {
    return (
    <>
        <h1>
            Something Went Wrong! Please Return to the home page.
        </h1>
        <Link to='/accounts'>Click Here</Link>
    </>
    )
}

export default ErrorComp

