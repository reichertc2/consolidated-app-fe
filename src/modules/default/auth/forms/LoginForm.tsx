import { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
//import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../../../context/AppContext";
//import Error from "../components/Error";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { IUserLoginFormValues } from "../models/IUserInterfaces";
import { Grid } from "@mui/material";

//Defining our yup validation
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
        console.log("login handleSubmit",values);
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
        <Grid>
            <h3>Please Login</h3>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="email"
                    name="email"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="email"
                    placeholder="email"
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
                    label="password"
                    placeholder="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />

                <button type="submit" style={{ width: "100%" }}>
                    Login
                </button>
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
        </Grid>
    );
}