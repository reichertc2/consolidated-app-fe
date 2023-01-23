
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

export default function Login() {

    return (

        <section style={{ width: "50%", margin: "0px auto", marginTop: "20%", padding: '3% 1%' }}>


            <LoginForm />

            <p>
                Not Registered? Click
                <Link to="/user/RegisterEditUser"> here</Link>
                .
            </p>

        </section>



    );
}