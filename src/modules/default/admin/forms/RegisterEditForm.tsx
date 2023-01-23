import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { Formik, FormikState, useFormik } from "formik";
import useCreateUser from "../hooks/useCreateUser";
import { IRegisterEditUser } from "../models/IUserInterfaces";
//import { AppContext } from "../../../context/AppContext";
//import useEditUser from "../hooks/useEditUser";


// Defining our yup validation
const FormSchema = Yup.object({
    email: Yup.string().email("Must be a valid e-mail format").required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    password: Yup.string().required(),
});



export default function RegisterEditForm() {
    //const { user, setAlert } = useContext(AppContext);

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

    const [newUser, setNewUser] = useState<IRegisterEditUser>(initialValues);
    const [editUser, setEditUser] = useState({});
    const [deleteUser, setDeleteUser] = useState({});

    useCreateUser(newUser);
    //useEditUser(editUser);



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
                        console.log('Register/Edit handleSubmit');
                        setNewUser(values)
                        alert(JSON.stringify(values))
                    }
                    }
                    initialValues={formik.initialValues}
                >
                    {({ handleSubmit , values, handleChange}  ) => (
                        <form onSubmit={ handleSubmit}>
                            <label>Email
                                <input type="email" name="email" placeholder="Email " value={values.email} onChange={handleChange}></input>
                            </label>
                            <label>First Name
                                <input type="text" name="firstName" placeholder="First Name " value={values.firstName} onChange={handleChange}></input>
                            </label>
                            <label>Last Name
                            <input type="text" name="lastName" placeholder="Last Name " value={values.lastName} onChange={handleChange}></input>
                            </label>
                            <label>Password
                                <input type="password" name="password" placeholder="Password " value={values.password} onChange={handleChange}></input>
                            </label>



                  
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