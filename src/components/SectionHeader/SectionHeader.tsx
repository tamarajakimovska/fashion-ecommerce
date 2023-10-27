import { Box, styled } from "@mui/material";
import React from "react";

const HeaderTitle = styled('div')({
    color: '#c8815f',
    fontFamily: 'Jost',
    fontSize: '17px',
    fontWeight: 'bold'
})

const HeaderSubtitle = styled('h2')({
    fontSize: '35px',
    fontFamily: 'Jost'
})

interface Props {
    title: string;
    subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: Props) => {
    return <Box textAlign={'center'} mb={4}>

        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </Box>
}