import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '..//assets/css/Adduser.css'

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    event:"",
  });

  const { name, username, email,event} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://dummyjson.com/posts", user);
    navigate("/profile");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="row_element">
          <h2 className="text">Event Booking</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="elemnet_id1">
              <label htmlFor="Name" className="form-label">
                ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your ID"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="element_id2">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="element_id3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <label htmlFor="event" className="form-label">
                Event Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Event Name"
                name="event"
                value={event}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="button_1">
              SUBMIT
            </button>
            <Link className="button_2" to="/profile">
              CANCEL
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}