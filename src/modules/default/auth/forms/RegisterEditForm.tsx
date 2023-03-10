import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import useCreateUser from "../hooks/useCreateUser";
import { IRegisterEditUserFormValues } from "../models/IUserInterfaces";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import useEditUser from "../hooks/useEditUser";


const FormSchema = Yup.object({
    email: Yup.string().email("Must be a valid e-mail format").required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    password: Yup.string().required(),
    Confirm_Password: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
});

interface IRegisterEditFormProps {
    user?: IRegisterEditUserFormValues
}

export default function RegisterEditForm(props: IRegisterEditFormProps) {

    const initialValues = {
        email: props.user?.email ?? "",
        first_name: props.user?.first_name ?? "",
        last_name: props.user?.last_name ?? "",
        password: props.user?.password ?? "",
        Confirm_Password: props.user?.password ?? "",
    };

    const [newUser, setNewUser] = useState<IRegisterEditUserFormValues>(initialValues);
    const [editUser, setEditUser] = useState<IRegisterEditUserFormValues>(initialValues);
    const [deleteUser, setDeleteUser] = useState({});

    useCreateUser(newUser);
    useEditUser(editUser)

    const handleSubmit = (values: IRegisterEditUserFormValues) => {

        console.log("handleSubmit")
        if (!props.user?.first_name) {
            setNewUser(values)
        } else {
            let editValue = {...values}
            editValue["id"] = props.user?.id
            setEditUser(editValue)
        }

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
        <Grid>
            {
                props.user?.email ? <h3>Edit Profile</h3>
                    : <h3>Please Register</h3>
            }


            <form onSubmit={formik.handleSubmit}>
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
                    id="first_name"
                    name="first_name"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="First Name"
                    placeholder="First Name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name}
                />
                <TextField
                    id="last_name"
                    name="last_name"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Last Name"
                    placeholder="Last Name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name}
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"

                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    id="Confirm_Password"
                    name="Confirm_Password"
                    fullWidth
                    type="password"
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    value={formik.values.Confirm_Password}
                    onChange={formik.handleChange}
                    error={formik.touched.Confirm_Password && Boolean(formik.errors.Confirm_Password)}
                    helperText={formik.touched.Confirm_Password && formik.errors.Confirm_Password}
                />

                {/* </form> */}


                {/* <Formik
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


 */}

                <Button
                    type="submit"
                    sx={{
                        width: "80%",
                        mb: 2,
                        textTransform: "capitalize",
                        fontSize: "18px",
                    }}>
                    Register
                </Button>
            </form>
            {/* //     )
            //     } */}

            {/* // </Formik> */}


        </Grid>
    );
}