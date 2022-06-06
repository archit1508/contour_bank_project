import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const Transactions = () => {

    let params = useParams()
    
    const[loading, setLoading] = useState(false)
    const [transactions, fetchTransactions] = useState<any[]>([])

    useEffect(()=>{
        fetch(`http://localhost:3000/data/transactions-${params.accountId}.json`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(transactionsFetched => {
                console.log(transactionsFetched)
                fetchTransactions(transactionsFetched)
                setLoading(true)
            })
    },[loading])

    console.debug('$',transactions)

    if(!loading){
        return(
            <h1>{params.accountId}</h1>
        )
    }
    else{
        return(
            <>
                {
                    transactions.map(
                        (transaction) => (
                            <>
                                <Link to={`/accounts/${params.accountId}/transaction-${params.accountId}/${transaction.id}`}>
                                    <h6>{transaction.id}</h6>
                                </Link>
                            </>
                        )
                    )
                }
            </>
            
        )
    }
}

export default Transactions