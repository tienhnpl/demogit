function User({name,pic}){
    return(
        <>
        <img src={pic} alt={name}/>
        <h1>{name}</h1>
        </>
    );
}
export default User;