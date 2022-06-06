import React, {useState} from 'react'
import {Container, Row, Col, Heading, Img, SubHeading} from './Styles'
import {Link, Outlet} from 'react-router-dom'

const Landing = () => {

  const [isStarted, setIsStarted] = useState(false)

  const buttonHandler = () => {
    setIsStarted(true)
  }

  if(!isStarted){
    return (
      <Container className="container-fluid">
        <Row className="row d-flex align-items-center">
          <Col className="col-sm-12 col-md-6">
            <Heading>Contour Banking</Heading>
            <SubHeading>A new way to bank</SubHeading>
            <Link to='/accounts'> 
              <button className="btn btn-success" onClick={() => buttonHandler()}>Go to Accounts</button>
            </Link>
          </Col>
          <Col className="col-md-6">
            <Img src="images/illustration1.png" />
          </Col>
        </Row>
      </Container>
    )
  }
  else{
    return(
      <>
        <Outlet />
      </>
    )
  }
  
}

export default Landing
