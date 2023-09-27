import { Routes,Route,Link,useParams } from "react-router-dom";
function UserDetail({users}){
    const {id}=useParams();
    console.log(id);
    const user=users[id];
    return(
        <>
        <img src={user.pic} alt={user.name}/>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        </>
    );
}
export default UserDetail;