import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import TransactionRow from '../../components/TransactionRow/TransactionRow'
import Spinner from '../../components/Spinner/Spinner'
import ErrorComp from '../../components/ErrorComp/ErrorComp'
import {Container, Heading, Table, TableRow, TableHeader} from './Styles'

const Transactions = () => {

    let params = useParams()
    
    const[loading, setLoading] = useState(false)
    const [transactions, fetchTransactions] = useState<any[]>([])
    const [err,setErr] = useState(false)

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
            .catch(err => {
                console.log(err)
                setErr(true)
            })
    },[loading])

    console.debug('$',transactions)

    if(!loading && !err){
        return(
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
                <Container className="table-responsive">
                    <Heading>Transaction Details for Account ID {params.accountId}</Heading>
                    <Table className="table">
                        <TableRow>
                            <TableHeader scope="col">ID</TableHeader>
                            <TableHeader scope="col">Description</TableHeader>
                            <TableHeader scope="col">Amount</TableHeader>
                            <TableHeader scope="col">Date</TableHeader>
                            <TableHeader scope="col">From</TableHeader>
                            <TableHeader scope="col">Status</TableHeader>
                        </TableRow>
                        {
                            transactions.map(
                                (transaction) => (
                                    <>
                                        <TransactionRow
                                            Transactionid={transaction.id}
                                            accountId={transaction.account_id}
                                            TransactionDescription={transaction.description}
                                            TransactionFrom={transaction.from}
                                            TransactionAmount={transaction.amount}
                                            TransactionDate={transaction.transaction_date}
                                            TransactionStatus={transaction.transaction_processed}
                                        />
                                    </>
                                )
                            )
                        }
                    </Table>
                </Container>
            </>
            
        )
    }
}

export default Transactions