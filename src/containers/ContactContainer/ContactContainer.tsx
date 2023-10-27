import React from 'react';
import { ContactDetails, Footer, HeaderWithText, Navigation } from '../../components';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Box } from '@mui/material';

export const ContactContainer = () => {
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
                page="NEED HELP?"
                firstDescription='Haven’t found what you’re looking for?'
                secondDescription='Contact us'
            />
        </Box>
        <Box
            display={'flex'}
            maxWidth={'1170px'}
            margin={'24px auto'}
            justifyContent={'space-between'}
            sx={{
                width: {
                    xs: 0.90,
                    sm: 0.65
                },
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }, padding: {
                    xs: '0 16px',
                    sm: 0
                }
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: 1,
                        sm: 0.35
                    }
                }}>
                <ContactDetails />
            </Box>
            <Box
                maxWidth={'1170px'}
                sx={{
                    width: {
                        xs: 1,
                        sm: 0.65
                    },
                    padding: {
                        xs: 0,
                        sm: '20px 40px'
                    }
                }}>
                <ContactForm />
            </Box>
        </Box>
        <Footer />
    </div>
}