
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

export default function Login() {

    return (

        <section
            className="w-6/12 m-auto mt-14 px-5 py-3"
        >


            <LoginForm />

            <p>
                Not Registered? Click
                <Link to="/user/RegisterEditUser"> here</Link>
                .
            </p>

        </section>



    );
}