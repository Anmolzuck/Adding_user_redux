import React, { useState } from "react";
import styles from "./AddBookNew.module.css";

import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

const SignupUser = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { fname, lname, email, password } = state;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log(state);

    setState({ ...state, [name]: value });
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    if (!fname || !lname || !email || !password) {
      setError("Please fill all the fields.");
    } else {
      console.log(state);
      dispatch(addUser(state));
    }
  };

  return (
    <div className={styles.modalBox}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h1>Add user data</h1>
          <span className={styles.closeBtn}>&times;</span>
        </div>

        {error && (
          <h3 style={{ color: "red", paddingLeft: "200px" }}>{error}</h3>
        )}

        <form onSubmit={submitChangeHandler}>
          <div className={`${styles.inputField} ${styles.field1}`}>
            <label htmlFor="name">First name</label>
            <br />
            <input
              type="text"
              name="fname"
              value={fname}
              id="name"
              placeholder="Enter book name"
              onChange={handleInputChange}
            />
            <br />
            <br />
            <label htmlFor="author">Last name</label>
            <br />
            <input
              type="text"
              name="lname"
              value={lname}
              id="author"
              placeholder="Enter author name"
              onChange={handleInputChange}
            />
          </div>

          <div className={`${styles.inputField} ${styles.field2}`}>
            <label htmlFor="genre">Email</label>
            <br />
            <input
              type="text"
              name="email"
              value={email}
              id="genre"
              placeholder="Enter genre"
              onChange={handleInputChange}
            />
            <br />
            <br />
            <label htmlFor="edition">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              id="edition"
              placeholder="Enter edition"
              onChange={handleInputChange}
            />

            <button className={styles.addBook}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupUser;
