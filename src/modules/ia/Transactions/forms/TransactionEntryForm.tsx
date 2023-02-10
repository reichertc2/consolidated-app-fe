import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { ITransactionEntryFormValues } from "../models/ITransactions";
import useTransaction from "../hooks/useTransaction";
import { useParams } from "react-router-dom";



// Defining our yup validation
const FormSchema = Yup.object({
    date: Yup.number().required(),
    transaction_type: Yup.string().required(),
    security_type: Yup.string().required(),
    symbol: Yup.string().required(),
    quantity: Yup.number().required(),
    amount: Yup.number().required(),
    price: Yup.number().required(),
    description: Yup.string().required(),
});

const initialValues = {
    date: 0,
    transaction_type: "",
    security_type: "",
    symbol: "",
    quantity: 0,
    amount: 0,
    price: 0,
    description: "",

};

export default function TransactionEntryForm() {

    const [newTransaction, setNewTransaction] = useState<ITransactionEntryFormValues>(initialValues);

    const { acctId } = useParams()

    useTransaction(Number(acctId) ?? 0, newTransaction);

    const handleSubmit = (values: ITransactionEntryFormValues) => {

        console.log("handleSubmit")
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
            <h3>Please Enter Transaction</h3>

            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="date"
                    name="date"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Date"
                    placeholder="Name"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                />
                <TextField
                    id="transaction_type"
                    name="transaction_type"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Transaction Type"
                    placeholder="Transaction Type"
                    value={formik.values.transaction_type}
                    onChange={formik.handleChange}
                    error={formik.touched.transaction_type && Boolean(formik.errors.transaction_type)}
                    helperText={formik.touched.transaction_type && formik.errors.transaction_type}
                />
                <TextField
                    id="security_type"
                    name="security_type"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Security Type"
                    placeholder="Security Type"
                    value={formik.values.security_type}
                    onChange={formik.handleChange}
                    error={formik.touched.security_type && Boolean(formik.errors.security_type)}
                    helperText={formik.touched.security_type && formik.errors.security_type}
                />

                <TextField
                    id="symbol"
                    name="symbol"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Symbol"
                    placeholder="Symbol"
                    value={formik.values.symbol}
                    onChange={formik.handleChange}
                    error={formik.touched.symbol && Boolean(formik.errors.symbol)}
                    helperText={formik.touched.symbol && formik.errors.symbol}
                />
                <TextField
                    id="quantity"
                    name="quantity"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Quantity"
                    placeholder="Quantity"
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                    helperText={formik.touched.quantity && formik.errors.quantity}
                />
                <TextField
                    id="amount"
                    name="amount"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Amount"
                    placeholder="Amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    error={formik.touched.amount && Boolean(formik.errors.amount)}
                    helperText={formik.touched.amount && formik.errors.amount}
                />
                <TextField
                    id="price"
                    name="price"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="Price"
                    placeholder="Price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                />
                <TextField
                    id="description"
                    name="description"
                    fullWidth
                    sx={{ mb: 2, mt: 2, backgroundColor: 'white' }}
                    label="description"
                    placeholder="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                />

                <Button
                    type="submit"
                    sx={{
                        width: "80%",
                        mb: 2,
                        textTransform: "capitalize",
                        fontSize: "18px",
                    }}>
                    Enter Account
                </Button>
            </form>


        </Grid>
    );
}