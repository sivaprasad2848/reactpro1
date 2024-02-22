var plist=[];
const Reducer1=(state=plist,action)=>{
    if(action.type=='addtocart'){
        state.push(action.value);
        console.log(state);
        //console.log("Reducer got the event");
    }
    return state;
}
export default Reducer1;