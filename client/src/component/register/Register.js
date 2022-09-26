import React, { useState } from "react";
import axios from "axios";
import "./RegisterStyle.css";

export default function Register() {
    const [data, setData] = useState({
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            email: data.email,
            password: data.password,
        };
        axios.post("http://localhost:3000/register", sendData)
            .then((res) => {
                console.log(res);
                console.log(sendData)
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="main-box">
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col-md-12 text-center">Register</div>
                    <div className="row">
                        <div className="col-md-6">Email</div>
                        <div className="col-md-6">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                onChange={handleChange}
                                value={data.email}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">password</div>
                        <div className="col-md-6">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={handleChange}
                                value={data.password}
                            />
                        </div>
                    </div>
                    <fieldset>
                        <legend>inscription en tant que :</legend>

                        <div>
                            <input
                                type="radio"
                                id="structure"
                                name="role"
                                onChange={handleChange}
                                value={"STRUCTURE"}
                            />
                            <label for="structure">candidat</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="partenaire"
                                name="role"
                                onChange={handleChange}
                                value={"PARTENAIRE"}
                            />
                            <label for="partenaire">recruteur</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="admin"
                                name="role"
                                onChange={handleChange}
                                value={"ADMIN"}
                            />
                            <label for="admin">admin</label>
                        </div>
                    </fieldset>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <input
                                type="submit"
                                name="submit"
                                value="Register"
                                className="btn btn-success"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
