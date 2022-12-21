import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { Formik, FormikState, useFormik } from "formik";
//import Button from "../components/Button";
import TextField from "@mui/material/TextField";
//import { AppContext } from "../../../context/AppContext";
//import useCreateUser from "../hooks/useCreateUser";
//import useEditUser from "../hooks/useEditUser";


// Defining our yup validation
const FormSchema = Yup.object({
    email: Yup.string().email("Must be a valid e-mail format").required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    password: Yup.string().required(),
});


interface IRegisterEditUser {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}
export default function RegisterEditForm() {
    //const { user, setAlert } = useContext(AppContext);

    const [newUser, setNewUser] = useState({});
    const [editUser, setEditUser] = useState({});
    const [deleteUser, setDeleteUser] = useState({});

    //useCreateUser(newUser);
    //useEditUser(editUser);

    const initialValues = {
        email:  "",
        firstName:  "",
        lastName:  "",
        password:  "",
        //email: user?.email ?? "",
        //firstName: user?.first_name ?? "",
        //lastName: user?.last_name ?? "",
        //password: user?.password ?? "",
    };

    const handleSubmit = (values: IRegisterEditUser) => {

        //if (!user.first_name) {
        //    setNewUser(values);
        //    console.log("Registering");
        //} else {
        //    setEditUser({ ...values });
        //    console.log("Edit Profile");
        //}
        console.log('Register/Edit handleSubmit');
        //resetForm('create handleSubmit');
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        },
        enableReinitialize: true,
    });

    //const handleDelete = (e) => {
    //    setDeleteUser(user);

    //    console.log("test delete", user);
    //};

    return (
        <>
            <section style={{ width: "50%" }}>
                <Formik
                    onSubmit={(values) => {
                        alert(JSON.stringify(values))
                    }
                    }
                    initialValues={formik.initialValues}
                >
                    {({ handleSubmit , values}) => (
                        <form onSubmit={ handleSubmit}>
                            <TextField
                                id="email"
                                name="email"
                                fullWidth
                                sx={{ mb: 2, mt: 2, backgroundColor: "white" }}
                                label="Email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />

                            <TextField
                                id="firstName"
                                name="firstName"
                                fullWidth
                                sx={{ mb: 2, backgroundColor: "white" }}
                                label="First Name"
                                placeholder="First Name"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.firstName && Boolean(formik.errors.firstName)
                                }
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />

                            <TextField
                                id="lastName"
                                name="lastName"
                                fullWidth
                                sx={{ mb: 2, backgroundColor: "white" }}
                                label="Last Name"
                                placeholder="Last name"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />

                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                fullWidth
                                sx={{ mb: 2, backgroundColor: "white" }}
                                label="Password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                  
                    <button type="submit" style={{ width: "100%" }}>
                            Register
                            </button>
                        </form>
                        )
                    }

                </Formik>
            </section>

        </>
    );
}