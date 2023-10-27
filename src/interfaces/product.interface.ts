import { Review } from "./review.interface";

export interface Product {
    description: string;
    id: string;
    images: string[];
    name: string;
    price: number;
    quantity: number;
    reviews: Review[];
    size?: string;
    type: string;
}