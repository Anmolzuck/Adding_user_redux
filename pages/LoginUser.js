import React, { useState } from "react";
import styles from "./AddBookNew.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/action";

const LoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = state;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log(state);

    setState({ ...state, [name]: value });
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Invalid Login Details");
    } else {
      console.log(state);
      dispatch(loginUser(state));
      navigate("/");
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

export default LoginUser;
