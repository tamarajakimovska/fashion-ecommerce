import { Box } from "@mui/system";
import React from "react";

interface Props {
    order: number;
    date: string;
    status: string;
    total: number;
}

export const AccountOrders = ({ order, date, status, total }: Props) => {
    return <div>
        <Box border={'1px solid rgba(0,0,0,.1)'} display={'flex'} justifyContent={'space-between'} padding={'0 16px 16px 16px'} textAlign={'center'} borderRadius={'4px'}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'inherit'}>
                <h4>Order</h4>
                <span>#{order}</span>
            </Box>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'inherit'}>
                <h4>Date</h4>
                <span>{date}</span>
            </Box>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'inherit'}>
                <h4>Status</h4>
                <span>{status}</span>
            </Box>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'inherit'}>
                <h4>Total</h4>
                <span>${total}</span>
            </Box>
        </Box>
    </div>
}