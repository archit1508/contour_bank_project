import React, {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom'

const Accounts = () => {

    const [loading, setLoading] = useState(false)
    const [accounts, setAccounts] = useState<any[]>([])

    useEffect(()=>{
        fetch('./data/accounts.json', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(accountsFetched => {
            console.log(accountsFetched)
            setAccounts(accountsFetched)
            setLoading(true)
        })
    },[loading])

    if(!loading){
        return (
            <h1>accounts</h1>
        )
    }
    else{
        return(
            <>
                <h1>accounts loaded</h1>
                {
                    accounts.map(
                        (account) => (
                            <>
                                <p>{account.account_name}</p>
                                <Link to={`/accounts/${account.id}/transactions`}>{account.id}</Link>
                            </>
                        )
                    )
                }
            </>
            
        )
    }
    
}

export default Accounts