import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TableCell, TableRow, TextField } from "@mui/material";
import { ITransactionEntryFormValues } from "../models/ITransactions";
import useTransaction from "../hooks/useTransaction";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

// Defining our yup validation
const FormSchema = Yup.object({
    date: Yup.date().required(),
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

interface ITransactionEntryForm {
    acctId: string
    setShowTableForm: (showTableForm: boolean) => void

}


export default function TransactionTableEntryForm(props: ITransactionEntryForm) {

    const [newTransaction, setNewTransaction] = useState<ITransactionEntryFormValues>(initialValues);

    useTransaction(Number(props.acctId), newTransaction);

    const handleSubmit = (values: ITransactionEntryFormValues) => {

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
        <TableRow>
            <TableCell colSpan={9}>

                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        id="date"
                        name="date"
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "20%" }}
                        label="Date"
                        placeholder="Date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}
                    />
                    <TextField
                        id="transaction_type"
                        name="transaction_type"
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "15%" }}
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
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "12%" }}
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
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "9%" }}
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
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "5%" }}
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
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "9%" }}
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
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "9%" }}
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
                        sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "9%" }}
                        label="description"
                        placeholder="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />


                    <Button
                        onClick={() => props.setShowTableForm(false)}
                        sx={{
                            marginLeft:"3rem",
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