import { useSelector,useDispatch } from "react-redux";

function Contactus(){
    const distpatch=useDispatch();
    const data=useSelector((state)=>{
        return state;
    });
    const changedata=()=>{
        var t1=document.getElementById('txtName').value;
        var t2=document.getElementById('txtAge').value;
        //console.log(t1,t2);
        var s={name:t1,age:t2};
        distpatch({type:'update',value:s})
    }
    return(
        <>
        <input type="text" id="txtName"/><br/>
        <input type="text" id="txtAge"/><br/>
        <input type="button" value="Change" onClick={changedata}/>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <h1>Contactus</h1>
        </>
    );
}
export default Contactus;