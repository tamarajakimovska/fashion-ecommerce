
import { Box, TextField } from "@mui/material";
import React from "react";

export const BillingDetails = () => {
    return <Box>

        <h2> Billing Details </h2>

        <Box pb={3} display={'flex'}>
            <Box mr={2}>
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    defaultValue=''
                />
            </Box>
            <Box>
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                />
            </Box>
        </Box>
        <Box>
            <Box mb={2}>  <TextField
                required
                id="outlined-required"
                label="Country"
                defaultValue=""
                fullWidth
            /></Box>
            <Box mb={2}> <TextField
                required
                id="outlined-required"
                label="Adress"
                defaultValue=""
                fullWidth
            /></Box>
            <Box mb={2}> <TextField
                required
                id="outlined-required"
                label="Postcode"
                defaultValue=""
                fullWidth
            /></Box>
            <Box mb={2}> <TextField
                required
                id="outlined-required"
                label="City"
                defaultValue=""
                fullWidth
            /></Box>
            <Box mb={2}> <TextField
                required
                id="outlined-required"
                label="E-mail"
                defaultValue=""
                fullWidth
            /></Box>
            <Box mb={2}> <TextField
                required
                id="outlined-required"
                label="Number"
                defaultValue=""
                fullWidth
            /></Box>

        </Box>
        <Box> <TextField
            required
            id="outlined-required"
            label="Notes"
            defaultValue=""
            fullWidth

        /></Box>

    </Box>
}