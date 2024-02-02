function Datacollector(p1){
    const getName=()=>{
        
        var txt1=document.getElementById('txtName');
        //console.log(txt1.value);
        p1.f1(txt1.value);
    }
    return(
        <>
        <p align="center">
        <input type="text" placeholder="EnterName" id="txtName"/>
        <input type="button" value="Enter" onClick={getName}/>
        </p>
        </>

    );
}
export default Datacollector;