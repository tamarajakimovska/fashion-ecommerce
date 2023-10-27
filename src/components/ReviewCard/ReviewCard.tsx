import { Box } from '@mui/material';
import React from 'react';

interface Props {
    imageLink: string;
    name: string;
    date: string;
    description: string;
}

export const ReviewCard = ({ imageLink, name, date, description }: Props) => {
    return (
        <Box display={'flex'} my={2} >
            <div>
                <img alt="review-card" style={{ borderRadius: '50%' }} src={imageLink} width={'50'} height={'50'} />
            </div>
            <Box ml={3} >
                <div>
                    <span>{name}{' '}</span>
                    <span>- {date}</span>
                </div>
                <div>{description}</div>
            </Box>
        </Box>
    )
};

