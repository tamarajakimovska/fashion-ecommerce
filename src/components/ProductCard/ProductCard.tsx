import React from "react";
import { useNavigate } from "react-router";


interface Props {
    image: string;
    name: string;
    price: number;
    id: string;
}


export const ProductCard = ({ image, name, price, id }: Props) => {
    const navigate = useNavigate();


    return <div onClick={() => navigate(`/product-description/${id}`)}>
        <img src={image} width={'98%'} alt="product" />
        <p>{name}</p>
        <span>${price}</span>
    </div>
}
