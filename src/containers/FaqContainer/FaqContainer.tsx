import { Box } from '@mui/material';
import React from 'react';

import { FaqList, Footer, HeaderWithText, Navigation } from '../../components';
import { FAQ_LIST } from '../../static';


export const FaqContainer = () => {

    return <div>
        <Navigation />
        <Box
            sx={{
                mt: {
                    xs: '80px',
                    sm: 0
                }
            }}
        >
            <HeaderWithText
                page="FAQ's"
                firstDescription='Any questions?'
                secondDescription='We’re here to help'
            />
        </Box>
        <FaqList faqlist={FAQ_LIST} />
        <Footer />
    </div>
}