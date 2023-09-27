import User from './User';
function UserList({users}){
return(
    <>
     {users.map((usr)=>{
        return(
            <User name={usr.name} pic={usr.pic}/>
            );
        })}
    </>
   
);
}
export default UserList;