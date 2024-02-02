var p={name:'sam',age:25};
const Reducer=(state=p,action)=>{
    if(action.type=="update"){
        state=action.value;
    }
    return state;    
}
export default Reducer;