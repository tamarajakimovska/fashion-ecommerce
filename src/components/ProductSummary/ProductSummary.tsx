import { Box, Button, Skeleton, styled } from "@mui/material";
import React, { useState } from "react";
import Payments from "../../images/payments.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { ProductReviews } from "../ProductReviews";
import { AccordionWrapper } from "../AccordionWrapper/AccordionWrapper";
import { Product } from "../../interfaces";

interface Props {
    numberOfViewingGuests: number;
    product: Product;
    onAddToCart: (product: Product) => void;
}

const Guests = styled('span')({
    color: 'red',
})

const Title = styled('h2')({
    fontSize: '34px',
    marginBottom: '4px',
    fontFamily: 'Jost',
    fontWeight: '400'
})

const Price = styled('h3')({
    fontSize: '24px',
    fontWeight: '500'
})

const ColorPicker = styled('span')({
    backgroundColor: 'black',
    borderRadius: '50%',
    padding: '10px',
    display: 'inline-block',
    boxShadow: '0 0 0 1px #c8815f',
    border: '2px solid #fff'
})

const Size = styled('span')<{ isActive: boolean }>(({ theme, isActive }) => ({
    padding: '15px',
    border: isActive ? '1px solid #000' : '1px solid #ddd',
    borderRadius: '4px',
    marginRight: '10px',

    '&:hover': {
        cursor: 'pointer',
    },
}));

export const ProductSummary = ({ numberOfViewingGuests, product, onAddToCart }: Props) => {
    const [selectedSize, setSelectedSize] = useState<string>('M')

    return <div>
        <p><b> <Guests>{numberOfViewingGuests} {' '}
            guests </Guests>
            are viewing this product </b></p>
        <Title>{product.name || <Skeleton variant="text" sx={{ fontSize: '2rem', width: '60%' }} />}</Title>
        <Price>${product.price || <Skeleton variant="text" sx={{ fontSize: '2rem', width: '30%' }} />}</Price>
        <p>Color:</p>
        <ColorPicker></ColorPicker>
        <p>Size:</p>

        <Box pt={4} pb={5}>
            {['S', 'M', 'L', 'XL'].map((size, index) => {
                return <Size
                    key={index}
                    isActive={size === selectedSize}
                    onClick={() => setSelectedSize(size)}
                >
                    {size}
                </Size>
            })}
        </Box>

        <Box mb={3} mt={3}>Quantity</Box>
        <Box display={'flex'}>
            <Box mr={2}>
                <Button onClick={() => onAddToCart({
                    ...product,
                    size: selectedSize
                })} variant="contained">Add to cart</Button>
            </Box>
            <Box mr={2}>
                <Button variant="contained">Buy Now</Button>
            </Box>
            <Box mr={2}>
                <span></span>
            </Box>
        </Box>

        <div>
            <Box display={'flex'} alignItems={'center'} bgcolor={'#f9f9f9'} justifyContent={'space-between'} padding={'20px 20px'} mt={3}>
                <Box width={'100%'}>Secure checkout with</Box>
                <Box width={'100%'}>
                    <img src={Payments} alt="product-summary" width={'100%'} />
                </Box>
            </Box>
        </div>
        <Box display={'flex'} alignItems={'center'} >

            <Box mr={2}><FontAwesomeIcon icon={faShip} /></Box>
            <p>
                Free shipping over $300</p>
        </Box>
        <div>
            <Box> Share:
                <Box component={'span'} mx={2}><FontAwesomeIcon icon={faFacebook} /></Box>
                <Box component={'span'} mr={2}><FontAwesomeIcon icon={faTwitter} /></Box>
                <Box component={'span'} mr={2}><FontAwesomeIcon icon={faInstagram} /></Box>
            </Box>
        </div>
        <Box mt={2}>
            <AccordionWrapper
                title={"Description"}
                description={product.description} />
            <AccordionWrapper title={"Reviews"} description={
                <ProductReviews
                    numberOfReviews={product?.reviews?.length}
                    productName={product.name}
                    reviews={product?.reviews || []}
                />} />
        </Box>
    </div>
}