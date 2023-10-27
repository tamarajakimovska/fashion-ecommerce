import React from 'react';
import { FaqItem, Question } from '../../static';
import { AccordionWrapper } from '../AccordionWrapper';
import { styled } from '@mui/system';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';


const List = styled('div')(({ theme }) => ({
    width: '30%',
    margin: '20px auto',
    fontFamily: 'Jost',
    [theme.breakpoints.down("sm")]: {
        width: '90%'
    },
}))

const H3 = styled('h3')({
    fontFamily: 'Jost',
    fontSize: '30px',
    marginTop: '40px',
    marginBottom: '30px'
})

interface Props {
    faqlist: FaqItem[]
}

export const FaqList = ({ faqlist }: Props) => {
    const navigate = useNavigate();
    return (
        <List>
            {faqlist.map((faq: FaqItem) => {
                return (
                    <div>
                        <H3>{faq.title}</H3>
                        {faq.questions.map((currentQuestion: Question) => {
                            return <Box my={2}>
                                <AccordionWrapper title={currentQuestion.question} description={currentQuestion.answer} />
                            </Box>
                        })}
                    </div>
                )
            })}
            <Box textAlign={'center'} my={4}>
                <p> Have a question not covered in the FAQ? </p>
                <Button variant='outlined' size="large" onClick={() => navigate(`/contact-us`)}>Contact us</Button>
            </Box>
        </List>
    )
}