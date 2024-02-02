import { useState } from 'react';
import C2 from '../C2/C2';
import './C1.css';
function C1(){
    var [val1,setVal1]=useState(0);
    var [val2,setVal2]=useState(0);
    const getData=()=>{
        var t1=document.getElementById("txt1");
        var t2=document.getElementById("txt2");
        //console.log(t1.value,t2.value);
        setVal1(t1.value);
        setVal2(t2.value);
    }
    return(
        <>
        <p className='bck1'>Hello </p>
        <input type="text" id="txt1" /><br/>
        <input type="text" id="txt2" /><br/>
        <input type="button" value="Ok" onClick={getData}/>
        <C2 v1={val1} v2={val2}></C2>
        </>
    );
}
export default C1;