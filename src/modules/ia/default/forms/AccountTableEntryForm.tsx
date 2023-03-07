import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import useCreateAccount from "../hooks/useCreateAccount";
import { IAccountEntryFormValues } from "../../../default/profile/models/IAccount";
import { Button, TableCell, TableRow, TextField } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


// Defining our yup validation
const FormSchema = Yup.object({
    name: Yup.string().required(),
    institution: Yup.string().required(),
    classification: Yup.string().required(),
});

const initialValues = {
    name: "",
    institution: "",
    classification: "",

};

interface IAccountTableEntryForm {
    setShowTableForm: (showTableForm: boolean) => void
}

export default function AccountTableEntryForm(props: IAccountTableEntryForm) {

    const [newAccount, setNewAccount] = useState<IAccountEntryFormValues>(initialValues);


    useCreateAccount(newAccount);

    const handleSubmit = (values: IAccountEntryFormValues) => {

        console.log("handleSubmit")
        setNewAccount(values)
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
        <TableRow>
            <TableCell colSpan={5}>

                <form onSubmit={formik.handleSubmit}>



                    <TextField
                        id="name"
                        name="name"
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "20%" }}
                        label="Name"
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        id="institution"
                        name="institution"
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "20%" }}
                        label="Institution"
                        placeholder="Institution"
                        value={formik.values.institution}
                        onChange={formik.handleChange}
                        error={formik.touched.institution && Boolean(formik.errors.institution)}
                        helperText={formik.touched.institution && formik.errors.institution}
                    />

                    <TextField
                        id="classification"
                        name="classification"
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "20%" }}
                        label="Classification"
                        placeholder="Classification"
                        value={formik.values.classification}
                        onChange={formik.handleChange}
                        error={formik.touched.classification && Boolean(formik.errors.classification)}
                        helperText={formik.touched.classification && formik.errors.classification}
                    />



                    <Button
                        onClick={() => props.setShowTableForm(false)}
                        sx={{
                            marginLeft: "20rem",
                            width: "4%",
                            mb: 2,
                            color: "black",
                            verticalAlign: "bottom"

                        }}
                    >
                        <ClearIcon />
                    </Button>

                    <Button
                        type="submit"
                        sx={{
                            width: "4%",
                            mb: 2,
                            color: "black",
                            verticalAlign: "bottom"

                        }}
                    >
                        <CheckIcon />
                    </Button>
                </form>
            </TableCell>
        </TableRow>


    );
}