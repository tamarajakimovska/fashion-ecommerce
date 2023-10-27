import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Props {
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
}

export const AccountDetailsBody = ({ firstName, lastName, displayName, email, }: Props) => {
    return <Box>
        <Box pb={3} display={'flex'}>
            <Box mr={2} >
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    defaultValue={firstName}
                />
            </Box>
            <TextField
                required
                id="outlined-required"
                label="Last Name"
                defaultValue={lastName}
            />
        </Box>
        <Box pb={3}>
            <TextField
                required
                id="outlined-required"
                label="Display name"
                defaultValue={displayName}
                fullWidth
            />
        </Box>
        <TextField
            required
            id="outlined-required"
            label="Email address"
            defaultValue={email}
            fullWidth
        />

    </Box>
}