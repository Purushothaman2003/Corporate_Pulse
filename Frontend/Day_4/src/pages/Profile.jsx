import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { FaEye } from 'react-icons/fa';
import { BiSolidEditAlt } from 'react-icons/bi';
import { FcBusinessman } from 'react-icons/fc';
import { MdDeleteOutline } from 'react-icons/md';
import Navbar from "../components/Navbar";
// import { useSelector } from "react-redux";
import '..//assets/css/Profile.css'


export default function Profile() {
  const [users, setUsers] = useState([]);
  // const { user } = useSelector((state) => state.master);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9090/get");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:9090/delete/${id}`);
    loadUsers();
  };

  return (
    <>
        {/* <Navbar/> */}
    <div className="pro">
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar_brand" to="/home">
          Corporate Pulse
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <Link className="btn" to="/adduser">
          Book Event
        </Link>
      </div>
    </nav>
  
    <div className="cont_prof">
      <div className="py_5">
          {/* {<h2 style={{fontFamily:"sans-serif"}}><FcBusinessman size={100}/><br/>Welcome Back !<span><h2>Email_Id:<span style={{color:"violet"}}>{user}</span></h2></span></h2>} */}
        <br/>
        <table className="table_pro">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Total Tax</th>
               <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.tax}</td>
                <td>
                  <Link
                    className="pro_1"
                    to={`/viewuser/${user.id}`}
                  >
                    <FaEye/>
                  </Link>
                  <Link
                    className="pro_2"
                    to={`/edituser/${user.id}`}
                  >
                    <BiSolidEditAlt/>
                  </Link>
                  <button
                    className="pro_3"
                    onClick={() => deleteUser(user.id)}
                  >
                   <MdDeleteOutline/>
                  </button>
                </td>
              </tr>
            ))}
        
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </>
  );
}