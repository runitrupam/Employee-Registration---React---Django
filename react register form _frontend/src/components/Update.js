import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateUser({ UpdateUserInAllUsers }) {
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location)
  // console.log(props.location , this)
  let user = location.state.user;

  console.log("IN UPDATE.js  ", location, user, UpdateUserInAllUsers);
  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone_no, setPhoneNo] = useState(user.phone_no);
  const [address, setAddress] = useState(user.address);
  const [password, setPassword] = useState(user.password);

  // const [username, setUserName] = useState({user.username})
  // const [email, setEmail] = useState({user.email})
  // const [phone_no, setPhoneNo] = useState({user.phone_no})
  // const [address, setAddress] = useState({user.address})
  const handleUpdate = (e) => {
    console.log(
      e,
      "IN UPDATE.js handleUpdate",
      username,
      email,
      phone_no,
      address,
      user.id,
      user.uid,
      user.first_name,
      user.password,
      user.last_name
    );

    e.preventDefault();
    if (email === "" || phone_no === "") {
      alert("Add Both Email and phone No. for Update");
    } else {
      UpdateUserInAllUsers({
        username: username,
        email: email,
        phone_no: phone_no,
        address: address,
        id: user.id,
        uid: user.uid,
        first_name: user.first_name,
        password: password,
        last_name: user.last_name,
      });
      // setUserName("")
      // setEmail("")
      // setPhoneNo("")
      // setAddress("")
      navigate("/");
    }
  };
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th>User Name</th>
          <td>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="username"
              id="username"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <th>Phone No</th>
          <td>
            <input
              type="test"
              className="form-control"
              placeholder="Phone No"
              name="phone_no"
              id="phone_no"
              value={phone_no}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <th>Email</th>
          <td>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <th>Address</th>
          <td>
            <input
              type="text"
              className="form-control"
              placeholder="address"
              name="address"
              id="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <th>Password</th>
          <td>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button
              type="Submit"
              className="btn btn-dark"
              onClick={handleUpdate}
            >
              Submit
            </button>

            {/* <input type="submit" className="btn btn-dark" onClick={handleClick} >subs </input> */}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UpdateUser;
