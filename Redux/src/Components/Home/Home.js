import { useSelector } from "react-redux";
function Home(){
    const data=useSelector((state)=>{
        return state;
    });
    return(
        <>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <h1>This is Home</h1>
        </>
    );
}
export default Home;