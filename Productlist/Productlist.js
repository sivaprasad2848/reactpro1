import {useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
function Productlist(){
    var [pList,setPlist]=useState([]);
    const dispatch=useDispatch();
    //Cart Adding
    const additem=(id)=>{
        console.log(id);
        dispatch({type:'addtocart',value:id});

    }

    //Cart Adding
    //Get Item Function
    const getitem=()=>{
          //Pasted Code
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://api.escuelajs.co/api/v1/products", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setPlist(result);
        })
        .catch((error) => console.error(error));
    //Pasted Code
    }
    //Get Item Function
    useEffect(()=>{
        getitem();
    },[]);
  
    return(
        <Container>
            <Row>
                <Col md={12}>
                    <h2 className='text-center mt-5 border-bottom'>Product List</h2>
                </Col>
            </Row>
            <Row>
                {
                    pList.map((item)=>{
                        return <Col md={3} className='card mt-2'><p>{item.title}</p>
                            <input type="button" className='btn btn-dark' onClick={()=>{
                                additem(item.id);
                            }} value="AddCart"/>
                        </Col>
                    })
                }
            </Row>
        </Container>
    );
}
export default Productlist;