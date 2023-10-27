import { Button, ButtonGroup } from "@mui/material";
import React from "react";

interface Props {
    counter: number;
    onDecrementClick: () => void;
    onIncrementClick: () => void;
}

export const Counter = ({ counter, onDecrementClick, onIncrementClick }: Props) => {
    return <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={() => onDecrementClick()}>-</Button>
        <Button disabled>{counter}</Button>
        <Button onClick={() => onIncrementClick()}>+</Button>
    </ButtonGroup>
}