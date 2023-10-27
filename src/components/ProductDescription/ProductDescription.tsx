import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { Box } from "@mui/material";

interface Props {
    icon: IconDefinition;
    title: string;
    summary: string;
}

export const ProductDescription = ({ icon, title, summary }: Props) => {
    return <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <FontAwesomeIcon icon={icon} fontSize={'4rem'} />
        <h3>{title}</h3>
        <p>{summary}</p>
    </Box>
}