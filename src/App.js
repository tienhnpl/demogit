// import logo from './logo.svg';
// import './App.css';
// import User from './User'
import UserList from './UserList'
import {Routes,Route,Link,Navigate} from 'react-router-dom';
import Home from './Home';
import UserDetail from './UserDetail';
import NotFundPage from './NotFoundPage';

   const user_list=[{
    name:'tien',
    pic:'https://genk.mediacdn.vn/2019/12/26/photo-1-15773329973071527377344.jpg',
bio:'thích gai',
   },{
    name:'Minh',
    pic:'https://kenh14cdn.com/2019/9/27/566226151661511044021668004432122225985389n-1569234596911848541502-1569517951952686128625.jpg',
    bio:'thích gái',
   },{
    name:'do',
    pic:'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-31/anh-10-1622435533-467-width650height813.jpg',
    bio:"thích gái",
   },];
function App(){
  const users=user_list;
  return(
    <>
    {/* <UserList tien={users}/> */}
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      {/* <a href='/users'>Users with anchor</a> */}
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<UserList users={users}/>}/>
      <Route path="/users/:id" element={<UserDetail users={users}/>}/>
      <Route path="*" element={<NotFundPage users={users}/>}/>
      <Route path="/people" element={<Navigate replace to='/users'/>}/>
    </Routes>
    </>
  );
}

export default App;
