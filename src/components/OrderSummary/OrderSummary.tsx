import { Button, FormControlLabel, Radio } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

interface Props {
    buttonText: string;
    totalPrice: number;
    onClick: () => void;
}


export const OrderSummary = ({ buttonText, onClick, totalPrice }: Props) => {
    const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>('free');
    const totalPriceWithShipping = selectedShippingMethod === 'free' ? totalPrice : totalPrice + 30;

    return <div>
        <Box border={'1px solid rgba(0,0,0,.1)'} px={3} borderRadius={'4px'} pb={3}>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                borderBottom={'1px solid rgba(0,0,0,.1)'}>
                <h3>Subtotal</h3>
                <h3>{totalPrice.toFixed(2)}</h3>
            </Box>
            <Box pt={2}>
                <span>SHIPPING</span>
                <Box display={'flex'} flexDirection={'column'} pt={2}>
                    <FormControlLabel
                        value="Flat rate: $30.00"
                        control={
                            <Radio
                                size="small"
                                checked={selectedShippingMethod === 'flat_rate'}
                                onChange={() => setSelectedShippingMethod('flat_rate')}
                            />}
                        label="Flat rate: $30.00" />
                    <FormControlLabel
                        value="Free shipping"
                        control={
                            <Radio size="small" checked={selectedShippingMethod === 'free'}
                                onChange={() => setSelectedShippingMethod('free')
                                } />}
                        label="Free shipping" />
                </Box>
                <Box borderBottom={'1px solid rgba(0,0,0,.1)'} pb={2}>Shipping to <b> Jablonskistrasse, 10405 Berlin, Germany. </b></Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <h3>Total</h3>
                    <h3>{totalPriceWithShipping.toFixed(2)}</h3>
                </Box>
                <Button onClick={() => onClick()} variant="contained" fullWidth={true}>{buttonText}</Button>
            </Box>
        </Box>
    </div >
}