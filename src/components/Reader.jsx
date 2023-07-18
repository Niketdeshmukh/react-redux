import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import Modal from "./Modal";
const Reader = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <div>
        {showPopup && (
          <Modal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />
        )}
        {users &&
          users.map((ele) => (
            <div key={ele.id} className="card w-50 mx-auto my-2">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.email}
                </h6>
                <p className="card-text">{ele.gender}</p>
                <button
                  to="#"
                  className="card-link"
                  onClick={() => [setId(ele.id), setShowPopup(true)]}
                >
                  View
                </button>
                <Link to={`/edit/${ele.id}`} className="card-link">
                  Edit
                </Link>
                <Link onClick={()=>dispatch(deleteUser(ele.id))} className="card-link">
                  Delete
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Reader;
