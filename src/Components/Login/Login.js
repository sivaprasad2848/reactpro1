import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Login(){
    return(
        <Container>
            <Row className='my-5'>
                <Col md={4}>
                </Col>
                <Col md={4} className='card '>
                    <h4 className='text-center my-2'> Login Here</h4>
                    <div className='form-group my-2'>
                        <label>Email</label>
                        <input type="email" placeholder='Email' className='form-control'/>
                    </div>
                    <div className='form-group my-2'>
                        <label>Password</label>
                        <input type="password" placeholder='Password' className='form-control'/>
                    </div>
                    <input type="button" value="Login" className='btn btn-dark w-100 mb-5' />
                    <Link to="/register">Register</Link>
                </Col>
            </Row>
        </Container>

    );
}
export default Login;