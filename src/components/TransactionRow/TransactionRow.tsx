import React from 'react'
import {Link } from 'react-router-dom'
import moment from 'moment'
import {Row, TableHeader, TransactionDescription, TransactionText} from './Styles'

const TransactionRow = (props:
    {
        Transactionid:number, 
        accountId:number, 
        TransactionDescription:string,
        TransactionFrom:string,
        TransactionDate:string,
        TransactionStatus:boolean,
        TransactionAmount:number
    }) => {

    let formattedDate = moment(props.TransactionDate.substring(0, 19)).format("dddd, MMM DD HH:mm A")
    
    return(
        <Row>
            <TableHeader scope="row">{props.Transactionid}</TableHeader>
            <TransactionDescription>{props.TransactionDescription}</TransactionDescription>
            <TransactionText>{props.TransactionAmount}</TransactionText>
            <TransactionText>{String(formattedDate)}</TransactionText>
            <TransactionText>{props.TransactionFrom}</TransactionText>
            {props.TransactionStatus && <TransactionText>&#9745;</TransactionText>}
            {!props.TransactionStatus && <TransactionText>&#9746;</TransactionText>}
            <TransactionText>
                <Link to={`/accounts/${props.accountId}/transaction-${props.accountId}/${props.Transactionid}`}>
                    Details
                </Link>
            </TransactionText>
        </Row>
    )
}

export default TransactionRow

