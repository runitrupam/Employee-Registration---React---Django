import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// import myConfig from "../configs.config.js";
function Add({ addUserToAllUsers }) {
    // const history = useHistory();

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone_no, setPhoneNo] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = (e) => {
        console.log(e, 'ADD.JS on click', username, email, phone_no, address)

        e.preventDefault();
        if (email === "" || phone_no === "" || password === "") {
            alert("Add  Email and phone No. and password");
        }
        else {
            addUserToAllUsers({ username: username, email: email, phone_no: phone_no, address: address,password})


            // const data = {
            //     "username": fullname,
            //     "first_name": "",
            //     "last_name": "",
            //     "uid": "12",
            //     "uname": fullname,
            //     "upass": password,
            //     "email": email,
            //     "password": password
            //   };
          
            //   let REG_URL =  "http://127.0.0.1:8000/register";
            //   axios({
            //     baseURL: REG_URL,
            //     method: "POST",
            //     data: data,
            //   })
            //     .then((res) => {
            //       if (res.status === 201) {
            //         toast(`Cadastro realizado com sucesso !`);
            //       }
                  
            //         setTimeout(5000);
            //     //   setTimeout(() => {
            //     //     history.push("/login/");
            //     //   }, 5000);
            //     })
            //     .catch((error) => {
            //       console.log(error);
            //       let error_msg = "";
            //       Object.keys(error.response.data).forEach(function (e) {
            //         error_msg += e + ": " + error.response.data[e][0] + " - ";
            //       });
            //       toast(error);
            //       alert(error + ": Change the username , email");
            //     });
            



            setUserName("")
            setEmail("")
            setPhoneNo("")
            setAddress("")
            setPassword("")
        }
    };

    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <th>User Name</th>
                    <td>
                        <input type="text" className="form-control"
                            placeholder='Full Name'
                            name="username"
                            id='username' value={username}
                            onChange={(e) => { setUserName(e.target.value) }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Phone No</th>
                    <td>
                        <input type="test" className="form-control"
                            placeholder='Phone No'
                            name="phone_no"
                            id='phone_no' value={phone_no}
                            onChange={(e) => { setPhoneNo(e.target.value) }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input type="email" className="form-control"
                            placeholder='email'
                            name="email"
                            id='email' value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td>
                        <input type="password" className="form-control"
                            placeholder='password'
                            name="password"
                            id='password' value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>
                        <input type="text" className="form-control"
                            placeholder='address'
                            name="address"
                            id='address' value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button type='Submit' className="btn btn-dark" onClick={handleClick} >Register</button>

                        {/* <input type="submit" className="btn btn-dark" onClick={handleClick} >subs </input> */}
                    </td>
                </tr>
            </tbody>
        </table>

    );
}

export default Add;