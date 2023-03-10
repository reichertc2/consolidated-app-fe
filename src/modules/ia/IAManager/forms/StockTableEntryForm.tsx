import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TableCell, TextField } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import useCreateStock from "../hooks/useCreateStock";
import { IStock, IStockEntryFormValues } from "../models/IStock";
import useUpdateStock from "../hooks/useUpdateStock";


// Defining our yup validation
const FormSchema = Yup.object({
    symbol: Yup.string().required(),
    description: Yup.string().required(),
    last: Yup.number().required(),
    quantity: Yup.number().required(),
    sector: Yup.string().required(),
});


interface IStockEntryForm {
    setShowTableForm: (showTableForm: boolean) => void,
    stock?: IStock,
    columns: number
}

export default function StockTableEntryForm(props: IStockEntryForm) {

    const initialValues = {
        symbol: props.stock?.symbol ?? "",
        description: props.stock?.description ?? "",
        last: props.stock?.last ?? 0,
        sector: props.stock?.sector ?? ""

    };


    const [newStock, setNewStock] = useState<IStockEntryFormValues>(initialValues);
    const [updatedStock, setUpdatedStock] = useState<IStockEntryFormValues>(initialValues);
    const [submissionReady, setSubmissionReady] = useState<boolean>(false)

    useCreateStock(newStock, submissionReady);
    useUpdateStock(updatedStock)

    const handleSubmit = (values: IStockEntryFormValues) => {

        console.log("handleSubmit")
        if (!props.stock?.symbol) {
            setSubmissionReady(true)
            setNewStock(values)
        }
        else {
            let editValue = { ...values }
            editValue["id"] = props.stock?.id
            setUpdatedStock(editValue)
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
        <TableCell colSpan={5}>

            <form onSubmit={formik.handleSubmit}>

                <TextField
                    id="symbol"
                    name="symbol"
                    sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "20%" }}
                    label="Symbol"
                    placeholder="Symbol"
                    value={formik.values.symbol}
                    onChange={formik.handleChange}
                    error={formik.touched.symbol && Boolean(formik.errors.symbol)}
                    helperText={formik.touched.symbol && formik.errors.symbol}
                />

                <TextField
                    id="description"
                    name="description"
                    sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "20%" }}
                    label="Description"
                    placeholder="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                />

                <TextField
                    id="last"
                    name="last"
                    sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "20%" }}
                    label="Last"
                    placeholder="Last"
                    value={formik.values.last}
                    onChange={formik.handleChange}
                    error={formik.touched.last && Boolean(formik.errors.last)}
                    helperText={formik.touched.last && formik.errors.last}
                />

                <TextField
                    id="sector"
                    name="sector"
                    sx={{ mb: 1, mt: 1, backgroundColor: 'white', display: "inline-block", width: "20%" }}
                    label="Sector"
                    placeholder="Sector"
                    value={formik.values.sector}
                    onChange={formik.handleChange}
                    error={formik.touched.sector && Boolean(formik.errors.sector)}
                    helperText={formik.touched.sector && formik.errors.sector}
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


    );
}