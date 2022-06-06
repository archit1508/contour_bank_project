import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Card, CardBody, CardTitle, CardText} from './Styles'

const AccountCard = (props:
    {
        accountId:number,
        accountName:string, 
        accountType:string, 
        accountBalance:number, 
        accountCurrency:string, 
        accountNumber:string, 
        isActive:boolean
    }) => {
        return(
            <Col className="col">
                <Card className="card">
                    <CardBody className="card-body">
                        <CardTitle className="card-title">{props.accountName}</CardTitle>
                        <CardText className="card-text">Type : {props.accountType}</CardText>
                        <CardText className="card-text">Balance : {props.accountBalance} {props.accountCurrency}</CardText>
                        <CardText className="card-text">Account Number : {props.accountNumber}</CardText>
                        {
                            props.isActive && 
                            <Link to={`/accounts/${props.accountId}/transactions`}>
                                    <button className="btn btn-success">Go to Transactions</button>
                            </Link>
                        }
                        {
                            !props.isActive &&
                            <Link to={`/accounts/${props.accountId}/transactions`}>
                                <button className="btn btn-danger">Go to Transactions</button>
                            </Link>
                        }
                    </CardBody>
                </Card>
            </Col>
        )
}

export default AccountCard