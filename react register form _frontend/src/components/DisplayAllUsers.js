import React from "react";
import { Link } from "react-router-dom";
// import UpdateUser from './Update';
import axios from "axios";

function DisplayAllUsers({ all_users }) {
  console.log(" dispaly all users ", all_users);
  const deleteUser = (id) =>  {
    // let id  = 0
    const deleteURL = "http://127.0.0.1:8000/delete";
    console.log(deleteURL, "deleteURL", id);
    axios
      .delete(`${deleteURL}/${id}`, {
        title: "Hello World!",
        body: "This is a new post.",
        id: id,
      })
      .then(() => {
        alert("User deleted!");
      });
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone NO</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {all_users.map((user) => (
          <tr
            key={`${user.id} ${user.email} ${user.username} ${user.phone_no}`}
          >
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone_no}</td>
            <td>{user.address}</td>
            <td colSpan="4">
              {/* <button className="btn btn-danger" 
                            onClick={() => { < UpdateUser  user={user} UpdateUserInAllUsers={UpdateUserInAllUsers} />}} > 
                                Update
                            </button> */}
                <div>
              <Link to="/update" state={{ run: "34", user: { ...user } }}>
                Update
              </Link>
              {
                <button
                  type="Submit"
                  className="btn btn-blue"
                  onClick=  {() => deleteUser(user.id)}   
                >
                  Delete
                </button>
              }
              </div>
              {/* <Link to= {{ pathname : "/update" , state : {user : user}
                            }} className="btn btn-info mr-2">Update</Link> */}
             
            </td>
            
          </tr>
        ))}

        {/* <tr>
                    <td>John</td>
                    <td>john@gmail.com</td>
                    <td>7894561230</td>
                    <td>123,NY</td> 
                    <td>
                        <Link to="/update/1" className="btn btn-info mr-2">Update</Link>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr> */}
      </tbody>
    </table>
  );
}

export default DisplayAllUsers;
