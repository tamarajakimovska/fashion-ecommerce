

import { Box } from "@mui/material";
import React from "react";

interface Props {
    image: string;
}

export const SocialMediaPost = ({ image }: Props) => {
    return <Box>
        <img src={image} width={'100%'} height={'100%'} alt="social-media-post" />
    </Box>
};
