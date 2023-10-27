import { Box } from "@mui/system";
import React from "react";

interface Props {
    name: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export const AccountListItem = ({ name, icon, isActive, onClick }: Props) => {
    return <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={2}
        bgcolor={isActive ? 'black' : '#eee'}
        color={isActive ? 'white' : 'black'}
        borderBottom={'1px solid #e7e7e7'}
        onClick={() => onClick()}>

        <h4> {name}</h4 >
        {icon}
    </Box >
}