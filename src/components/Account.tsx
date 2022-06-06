import React from 'react'
import {useParams} from 'react-router-dom'

const Account = () => {

    let paramas = useParams();

    return (
        <h1>{paramas.accountId}</h1>
    )
}

export default Account