import { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../../../context/AppContext";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { IUserLoginFormValues } from "../models/IUserInterfaces";
import { Button, Grid } from "@mui/material";

const FormSchema = Yup.object({
    email: Yup.string().email("Must be a valid e-mail format").required(),
    password: Yup.string().required(),
});

const initialValues = {
    email: "",
    password: "",
};

export default function LoginForm() {
    const { user, setUser } = useContext(AppContext);
    const [loginCreds, setLoginCreds] = useState({});
    const [error, setError] = useState("");

    useLogin(loginCreds, setLoginCreds, setError, setUser);

    const handleSubmit = (values: IUserLoginFormValues) => {
        console.log("login handleSubmit", values);
        setLoginCreds(values);
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });

    return (
        <>
            <form
                className="max-w-lg"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    id="email"
                    name="email"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                    id="password"
                    name="password"
                    type="password"
                    fullWidth
                    sx={{ mb: 2, backgroundColor: 'white' }}
                    label="Password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />

                <Button
                    type="submit"
                    sx={{ width: "100%" }}>
                    Login
                </Button>
                {/*<Error>{error}</Error>*/}
            </form>

            <Link
                to="/RegisterEdit"
                style={{ display: "flex", color: "inherit", textDecoration: "none" }}
            >
                {/*<Button type="submit" sx={{ width: "100%", mt: 2 }}>*/}
                {/*    {user.first_name ? "Edit Profile" : "Register"}*/}
                {/*</Button>*/}
            </Link>
        </>
    );
}