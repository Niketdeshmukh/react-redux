import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { showUser } from '../features/userDetailsSlice';

const Reader = () => {
  const dispatch = useDispatch();

  const {users,loading} = useSelector((state)=>state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);
  
  if(loading){
    return (<h2>Loading</h2>)
  }
  return (
    <>
    <div><h2>All data</h2></div>
    <div>
    {users && users.map((ele)=>(
    <div className="card w-50 mx-auto my-2">
    <div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
    <p className="card-text">{ele.age}</p>
    <Link to="#" className="card-link">View</Link>
    <Link to="#" className="card-link">Edit</Link>
    <Link to="#" className="card-link">Delete</Link>
    </div>
    </div>
    
    ))}
    </div>
    </>
  )
}

export default Reader