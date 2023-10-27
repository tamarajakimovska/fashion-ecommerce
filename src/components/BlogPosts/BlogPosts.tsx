import { Box, Button } from "@mui/material";
import React from "react";


interface Props {
    image: string;
    category: string;
    date: string;
    title: string;
    content: string;
    link: string;
}

export const BlogPosts = ({ image, category, date, title, content, link }: Props) => {
    return <Box display={'flex'} flexDirection={'column'} onClick={() => window.open(link, '_blank')}>
        <img src={image} alt="blog-post" />
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <h3>{category}</h3>
            <span>{date}</span>
        </Box>
        <h2>{title}</h2>
        <p>{content}</p>
        <Box>
            <Button variant="contained" fullWidth={false}>Shop Now</Button>
        </Box>
    </Box>
}