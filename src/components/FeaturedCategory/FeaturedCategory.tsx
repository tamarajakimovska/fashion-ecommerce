import React from "react";

interface Props {
    image: string;
    title: string;
    availableItems: string;

}

export const FeaturedCategory = ({ image, title, availableItems }: Props) => {
    return <div>

        <img src={image} alt="category" />
        <p>{title}</p>
        <span>{availableItems}</span>
    </div>
}
