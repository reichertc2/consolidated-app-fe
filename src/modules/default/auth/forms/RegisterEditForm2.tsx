import { useState } from "react";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import useCreateUser from "../hooks/useCreateUser";
import { IRegisterEditUserFormValues } from "../models/IUserInterfaces";



// Defining our yup validation
const FormSchema = Yup.object({
    email: Yup.string().email("Must be a valid e-mail format").required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    password: Yup.string().required(),
});



export default function RegisterEditForm() {


    const initialValues = {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
    };

    const [newUser, setNewUser] = useState<IRegisterEditUserFormValues>(initialValues);
    const [editUser, setEditUser] = useState({});
    const [deleteUser, setDeleteUser] = useState({});

    useCreateUser(newUser);



    const handleSubmit = (values: IRegisterEditUserFormValues) => {


    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        },
        enableReinitialize: true,
    });


    return (
        <>
            <section style={{ width: "50%" }}>
                <Formik
                    onSubmit={(values) => {
                        setNewUser(values)
                        alert(JSON.stringify(values))
                    }
                    }
                    initialValues={formik.initialValues}
                >
                    {({ handleSubmit, values, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <label>Email
                                <input type="email" name="email" placeholder="Email " value={values.email} onChange={handleChange}></input>
                            </label>
                            <label>First Name
                                <input type="text" name="first_name" placeholder="First Name " value={values.first_name} onChange={handleChange}></input>
                            </label>
                            <label>Last Name
                                <input type="text" name="last_name" placeholder="Last Name " value={values.last_name} onChange={handleChange}></input>
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