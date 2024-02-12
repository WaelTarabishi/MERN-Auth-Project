import { Container, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Hero = () => {
    return (
        <div className='py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4 '>MERN Authentication</h1>
                    <p className='text-center mb-4'>
                        This is a boilerplate for MERN authentication that stores a
                        JWT in
                        a HTTP-only cookie. It also uses Redux Toolkit and the React
                        Bootstrap Library
                    </p>
                    <div className='d-felx'>
                        <LinkContainer to='/login'>
                            <Button variant='primary' className='me-3'>
                                Sign In
                            </Button>
                        </LinkContainer>
                        <LinkContainer to='/register'>
                            <Button variant='secondary' href='/register'>
                                Register
                            </Button>
                        </LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Hero