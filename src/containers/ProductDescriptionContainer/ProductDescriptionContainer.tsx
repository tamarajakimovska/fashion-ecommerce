import React, { useContext, useEffect, useState } from "react";
import { Footer, ImagesSlider, Navigation, PageNavigation, ProductSummary } from "../../components";
import { Box } from "@mui/material";
import { useParams } from "react-router";
import { Context } from "../../context";
import { Product } from "../../interfaces";

export const ProductDescriptionContainer = () => {
    const [product, setProduct] = useState<Product>({} as Product)
    const state = useContext(Context);
    const params = useParams();

    useEffect(() => {
        fetch(`https://651451b48e505cebc2eb2031.mockapi.io/products/${params?.id}`)
            .then(res => res.json())
            .then(res => {
                setProduct(res)
            })
    }, [params?.id]);

    return <div>
        <Navigation />
        <PageNavigation />
        <Box display={'flex'} flexDirection={'column'} maxWidth={'1170px'} margin={'2rem auto'}
            sx={{
                padding: {
                    xs: 0,
                    sm: '20px'
                },
                width: {
                    xs: '80%',
                    sm: '65%'
                }
            }}
        >
            <Box display={'flex'}
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    }
                }}
            >
                <Box mt={2}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '50%'
                        },
                        mr: {
                            xs: 0,
                            sm: 4
                        }
                    }}
                >
                    <ImagesSlider images={product.images} />
                </Box>
                <Box
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '50%'
                        }
                    }}
                >
                    <ProductSummary
                        numberOfViewingGuests={37}
                        product={product}
                        onAddToCart={(product: Product) => state.addToCart(product)}
                    />
                </Box>
            </Box>
        </Box>
        <Footer />
    </div>
}