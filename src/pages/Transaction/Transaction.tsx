import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Transaction = () => {

    let {accountId, transactionId} = useParams()
    const[transaction, setTransaction] = useState()
    const[loading,setLoading] = useState(false)

        useEffect(()=>{
            fetch(`http://localhost:3000/data/transactions-${accountId}.json`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(transactionsFetched => {
                    console.log(transactionsFetched)
                    let tra = transactionsFetched.find(
                        (transaction1: { id: string | undefined })=>(transaction1.id == transactionId)
                    )
                    setTransaction(tra)
                    setLoading(true)
                })
        }, [loading])

        console.log('$', transaction)

    if(!loading){
        return (
            <h1>Transaction</h1>
        )
    }
    else{
        return(<h1>TLoaded</h1>)
    }
    
}

export default Transaction