import React from 'react'
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { notImplementedYet } from '../App'
import AppCarousel from './AppCarousel'
import AppMap from './AppMap'

export const Homepage = () => {

  const attractions = useSelector(state => state.attractions);
  return (
    <>
        <Container>
            <Row>
              <Col sm={12} md={9}>
                <AppCarousel/>
                <br/>
                <AppMap/>
              </Col>
              <Col sm={12} md={3}>
                <Card className='bg-dark mb-3'>
                  <Card.Header className='bg-primary'>
                    <Link className='text-white text-decoration-none' onClick={notImplementedYet}>Attractions</Link>
                  </Card.Header>
                  <ListGroup variant='flush' className='border'>
                    {attractions.slice(0,5).map( (attraction) =>{
                      return(
                        <ListGroup.Item className='bg-dark text-white border-bottom' onClick={notImplementedYet}>{attraction.name}</ListGroup.Item>
                      ); 
                    })}
                  </ListGroup>
                </Card>

                <Card className='bg-dark mb-3'>
                  <Card.Header className='text-white bg-primary'>
                    <Link className='text-white text-decoration-none' onClick={notImplementedYet}>Events</Link>
                  </Card.Header>
                  <ListGroup variant='flush'></ListGroup>
                </Card>

                <Card className='bg-dark mb-3'>
                  <Card.Header className='text-white bg-primary'>
                    <Link className='text-white text-decoration-none' onClick={notImplementedYet}>Restaurants</Link>
                  </Card.Header>
                  <ListGroup variant='flush'></ListGroup>
                </Card>

                <Card className='bg-dark mb-3'>
                  <Card.Header className='text-white bg-primary'>
                    <Link className='text-white text-decoration-none' onClick={notImplementedYet}>Accommodation</Link>
                  </Card.Header>
                  <ListGroup variant='flush'></ListGroup>
                </Card>

                <Card className='bg-dark mb-3'>
                  <Card.Header className='text-white bg-primary'>
                    <Link className='text-white text-decoration-none' onClick={notImplementedYet}>News</Link>
                  </Card.Header>
                  <ListGroup variant='flush'></ListGroup>
                </Card>

              </Col>
            </Row>
        </Container>
    </>
    
  )
}
