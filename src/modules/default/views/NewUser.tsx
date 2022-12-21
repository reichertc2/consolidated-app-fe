
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

export default function NewUser() {

    return (
        <>
            <LoginForm />
            <p>New to the site click <Link to='/user/RegisterEditUser'>here</Link>.</p>
        </>

    );
}