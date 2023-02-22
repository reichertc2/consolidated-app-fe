import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { IFileUploadFormValues, ITransactionEntryFormValues } from "../models/ITransactions";
import useTransaction from "../hooks/useTransaction";



// Defining our yup validation
const FormSchema = Yup.object({
    file: Yup.mixed().required('File is required'),

});

const initialValues = {
    file: "",


};

interface IFileUploadForm {
}

export default function FileUploadForm(props: IFileUploadForm) {

    const [newTransaction, setNewTransaction] = useState<IFileUploadFormValues>(initialValues);


    // useTransaction(Number(props.acctId), newTransaction);

    const handleSubmit = (values: IFileUploadFormValues) => {

        setNewTransaction(values)
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
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="date"
                    name="date"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Date"
                    placeholder="Date"
                    value={formik.values.file}
                    onChange={formik.handleChange}
                    error={formik.touched.file && Boolean(formik.errors.file)}
                    helperText={formik.touched.file && formik.errors.file}
                />


                <Button
                    type="submit"
                    sx={{
                        width: "80%",
                        mb: 2,
                        textTransform: "capitalize",
                        fontSize: "18px",
                    }}>
                    Upload File
                </Button>
            </form>


        </Grid>
    );
}