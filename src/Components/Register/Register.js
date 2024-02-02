import { Container,Row,Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
function Register(){
    return(
        <Container>
        <Row className='my-5'>
            <Col md={4}>
            </Col>
            <Col md={4} className='card '>
                <h4 className='text-center my-2'> Register Here</h4>
                <div className='form-group my-2'>
                    <label>Name</label>
                    <input type="text" placeholder='Name' className='form-control'/>
                </div>
                <div className='form-group my-2'>
                    <label>Mobile</label>
                    <input type="text" placeholder='Mobile' className='form-control'/>
                </div>
                <div className='form-group my-2'>
                    <label>Email</label>
                    <input type="email" placeholder='Email' className='form-control'/>
                </div>
                <div className='form-group my-2'>
                    <label>Password</label>
                    <input type="password" placeholder='Password' className='form-control'/>
                </div>
                <div className='form-group my-2'>
                    <label>Confirm</label>
                    <input type="password" placeholder='Confirm' className='form-control'/>
                </div>
                <input type="button" value="Register" className='btn btn-dark w-100 mb-5' />
                <Link to="/login">Login</Link>
            </Col>
        </Row>
    </Container>
    );
}
export default Register;