import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

export const ContactForm = () => {
    return <div>
        <Typography variant="h4" >
            Get in touch
        </Typography>
        <Box my={3}>Your email address will not be published. Required fields are marked *</Box>
        <Box display={'flex'} justifyContent={'space-between'}>
            <Box width="100%" mr={2}>
                <TextField id="outlined-basic" label="Name *" variant="outlined" fullWidth />
            </Box>
            <TextField id="outlined-basic" label="Email *" variant="outlined" fullWidth />
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} mt={3} mb={3}>
            <Box width={'100%'} mr={2}>
                <TextField id="outlined-basic" label="Phone number" variant="outlined" fullWidth />
            </Box>
            <TextField id="outlined-basic" label="Website " variant="outlined" fullWidth />
        </Box>
        <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder='Contents'
            fullWidth

        />
        <Box mt={3} display={'flex'} justifyContent={'center'}>
            <Button variant="outlined" size='large'>Post Comment</Button>
        </Box>
    </div>
}