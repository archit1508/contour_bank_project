import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import moment from 'moment'
import ErrorComp from '../../components/ErrorComp/ErrorComp'
import {BackButton, Container, Heading, Row, Col, SubHeading, Text} from './Styles'

const Transaction = () => {

    let {accountId, transactionId} = useParams()
    const [transaction, setTransaction] = useState({
        Transactionid: 0,
        accountId: 0,
        TransactionDescription: 'string',
        TransactionFrom: 'string',
        TransactionDate: 'string',
        TransactionStatus: true,
        TransactionAmount: 0
    })
    const[loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)

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
                    setTransaction({
                        Transactionid: tra.id,
                        accountId: tra.amount,
                        TransactionDescription: tra.description,
                        TransactionFrom: tra.from,
                        TransactionDate: tra.transaction_date,
                        TransactionStatus: tra.transaction_processed,
                        TransactionAmount: tra.amount
                    })
                    setLoading(true)
                })
                .catch(err => {
                    console.log(err)
                    setErr(true)
                })
        }, [loading])

    let formattedDate = moment(transaction.TransactionDate.substring(0, 19)).format("dddd, MMM DD HH:mm A")

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
                <BackButton><Link to={`/accounts/${accountId}/transactions/`}>&#8592;</Link></BackButton>
                <Container className="contatiner-fluid">
                    <Heading>Transaction Details</Heading>
                    <Row className="row">
                        <Col className="col-sm-12">
                            <SubHeading>Transaction ID</SubHeading>
                            <Text>{transaction?.Transactionid}</Text>
                            <SubHeading>Transaction Description</SubHeading>
                            <Text>{transaction?.TransactionDescription}</Text>
                            <SubHeading>Transaction From</SubHeading>
                            <Text>{transaction?.TransactionFrom}</Text>
                            <SubHeading>Transaction Amount</SubHeading>
                            <Text>{transaction?.TransactionAmount}</Text>
                            <SubHeading>Transaction Date</SubHeading>
                            <Text>{formattedDate}</Text>
                            <SubHeading>Transaction Status</SubHeading>
                            <Text>{transaction?.TransactionStatus && <p>Processed</p>}</Text>
                            <Text>{!transaction?.TransactionStatus && <p>Not Processed</p>}</Text>
                        </Col>
                    </Row>
                </Container> 
            </>
               
        )
    }
    
}

export default Transaction