import { Box } from "@mui/system";

import React from "react";
import { Counter } from "../Counter";

interface Props {
    image: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
    onDecrementClick: () => void;
    onIncrementClick: () => void;
    onRemoveFromCart: () => void;
}

export const CartItem = ({ image, name, size, quantity, price, onDecrementClick, onIncrementClick, onRemoveFromCart }: Props) => {

    return <div>
        <Box display={'flex'} borderBottom={'1px solid rgba(0,0,0,.1)'} pb={2}>
            <Box mr={4}>
                <img
                    src={image}
                    alt=""
                    style={{
                        width: '120px',
                        height: '150px',
                        objectFit: 'cover'
                    }} />
            </Box>
            <Box width={'100%'} padding={'1rem 0'}>
                <Box display={'flex'} justifyContent={'space-between'} padding={'0.5rem 0'}>
                    <span>{name}</span>
                    <span onClick={() => onRemoveFromCart()}>x</span>
                </Box>
                <Box padding={'0.5rem 0'}>
                    <span>Size: {size}</span>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'0.5rem 0'}>
                    <Counter
                        counter={quantity}
                        onDecrementClick={() => onDecrementClick()}
                        onIncrementClick={() => onIncrementClick()}
                    />
                    <span>${price}</span>
                </Box>
            </Box>
        </Box>
    </div>
}