import React, { useState } from "react";
import "./bootstrap.min.css";

import DisplayAllUsers from "./components/DisplayAllUsers";
import Add from "./components/Add";
import UpdateUser from "./components/Update";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [all_users, setUser] = useState([]);
  const [id, setId] = useState(0);

  React.useEffect(() => {
    axios.get("http://127.0.0.1:8000/show").then((response) => {
      console.log("useEffect",response.data)
      setUser(response.data);
    });
  }, [id]);

  const addUserToAllUsers = (new_user) => {
    

    console.log(
      new_user,
      "Adding a new user in the function addUserToAllUsers"
    );

    const data = {
      username: new_user.username,
      first_name: "",
      last_name: "",
      uid: id + 1,
      uname: new_user.username,
      upass: new_user.password,
      email: new_user.email,
      password: new_user.password,
    };

    let REG_URL = "http://127.0.0.1:8000/register";
    axios({
      baseURL: REG_URL,
      method: "POST",
      data: data,
    })
      .then((res) => {
        if (res.status === 201) {
          toast(`Cadastro realizado com sucesso !`);
          alert("Success: User Added");
        }

        setTimeout(5000);
        //   setTimeout(() => {
        //     history.push("/login/");
        //   }, 5000);
      })
      .catch((error) => {
        console.log(error);
        let error_msg = "";
        Object.keys(error.response.data).forEach(function (e) {
          error_msg += e + ": " + error.response.data[e][0] + " - ";
        });
        toast(error_msg);
        alert(error_msg + ": Change the username , email");
      });

    // new_user["id"] = id;
    setId(id + 1);

    // setUser( (prevAllUsers) => [...prevAllUsers, new_user]  );
    // setContact( (prevContacts) => [...prevContacts, new_contact].sort( (a, b) =>
    //  a.firstname.toLowerCase() > b.firstname.toLowerCase() ? 1 : -1 )  );

    // setUser((prevAllUsers) =>
    //   [...prevAllUsers, new_user].sort((a, b) =>
    //     a.username.toLowerCase().localeCompare(b.username.toLowerCase())
    //   )
    // );
  };

  const UpdateUserInAllUsers = (update_user) => {
    console.log(
      update_user,
      "APP.js function : updating a new user in the function UpdateUserInAllUsers"
    );
    // setUser( (prevAllUsers) => [...prevAllUsers, new_user]  );
    // setContact( (prevContacts) => [...prevContacts, new_contact].sort( (a, b) =>
    //  a.firstname.toLowerCase() > b.firstname.toLowerCase() ? 1 : -1 )  );

    const update_data = {
      username: update_user.username,
      first_name: update_user.first_name,
      last_name: update_user.last_name,
      uid: update_user.uid,
      uname: update_user.username,
      upass: update_user.password,
      email: update_user.email,
      password: update_user.password,
    };

    let Update_URL = "http://127.0.0.1:8000/update";
    // `${Update_URL}/${update_user.id}`
    axios({
      baseURL: `${Update_URL}/${update_user.id}`,
      method: "PUT",
      data: update_data,
    })
      .then((res) => {
        if (res.status === 202) {
          toast(`Success  !`);
          alert("Success: User Modified");
        }

        setTimeout(5000);
        //   setTimeout(() => {
        //     history.push("/login/");
        //   }, 5000);
      })
      .catch((error) => {
        console.log(error);
        let error_msg = "";
        Object.keys(error.response.data).forEach(function (e) {
          error_msg += e + ": " + error.response.data[e][0] + " - ";
        });
        toast(error_msg);
        alert(error_msg + ": Change the username , email");
      });



    // var data = [...all_users];
    // let pos = -1;
    // // console.log('data',data, data.length)
    // for (var i = 0; i < data.length; i++) {
    //   // console.log(data[i] ) ;
    //   if (data[i]["id"] === update_user.id) {
    //     pos = i;
    //     data[pos]["username"] = update_user["username"];
    //     data[pos]["email"] = update_user["email"];
    //     data[pos]["address"] = update_user["address"];
    //     data[pos]["phone_no"] = update_user["phone_no"];
    //     break;
    //   }
    // }
    // // console.log( 'data all' , data )
    // setUser(() =>
    //   data.sort((a, b) =>
    //     a.username.toLowerCase().localeCompare(b.username.toLowerCase())
    //   )
    // );
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route
          exact
          path="/"
          element={<DisplayAllUsers all_users={all_users} />}
        />
        <Route
          exact
          path="/add"
          element={<Add addUserToAllUsers={addUserToAllUsers} />}
        />
        {/* <Route exact path="/update" element={<UpdateUser user = {user} UpdateUserInAllUsers = {UpdateUserInAllUsers}/>} />   */}
        <Route
          exact
          path="/update"
          element={<UpdateUser UpdateUserInAllUsers={UpdateUserInAllUsers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
