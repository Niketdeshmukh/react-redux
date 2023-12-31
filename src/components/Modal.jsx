import React from "react";
import { useSelector } from "react-redux";
import styles from "./Modal.module.css";

const Modal = ({id,showPopup,setShowPopup}) => {

    const allUsers = useSelector((state) => state.app.users);

    const singleUser = allUsers.filter((ele) => ele.id === id);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={()=>setShowPopup(false)}>Close</button>
        <h2>{singleUser[0].name}</h2>
        <h3>{singleUser[0].email}</h3>
        <h4>{singleUser[0].age}</h4>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default Modal;
