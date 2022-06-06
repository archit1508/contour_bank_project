import React, {useState, useEffect} from 'react'
import AccountCard from '../../components/AccountCard/AccountCard'
import ErrorComp from '../../components/ErrorComp/ErrorComp'
import Spinner from '../../components/Spinner/Spinner'
import {Container, Heading, Row} from './Styles'

const Accounts = () => {

    const [loading, setLoading] = useState(false)
    const [accounts, setAccounts] = useState<any[]>([])
    const [err,setErr] = useState(false)

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
        .catch(err => {
            console.log(err)
            setErr(true)
        })
    },[loading])

    if(!loading && !err){
        return (
            <Spinner />
        )
    }
    else if(!loading && err){
        return(
            <ErrorComp />
        )
    }
    else{
        return(
            <>
                <Container className="container-fluid">
                    <Heading>List of Accounts</Heading>
                    <Row className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            accounts.map(
                                (account) => (
                                    <>
                                        <AccountCard
                                            accountId={account.id}
                                            accountName={account.account_name}
                                            accountType={account.account_type}
                                            accountBalance={account.balance}
                                            accountCurrency={account.currency}
                                            accountNumber={account.account_number}
                                            isActive={account.is_active}
                                        />
                                    </>
                                )
                            )
                        }
                    </Row>
                </Container>
            </>
            
        )
    }
    
}


export default Accounts