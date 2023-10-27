import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, styled } from '@mui/material';
import { BlogPosts, Footer, HomePageSlider, Navigation, ProductCard, SaleCountdown, SocialMediaPost } from '../../components';
import Blog1 from "../../images/Blog1.jpeg";
import Blog2 from "../../images/Blog2.jpeg";
import Blog3 from "../../images/Blog3.jpeg";
import Instagram1 from "../../images/Instagram1.jpeg";
import Instagram2 from "../../images/Instagram2.jpeg";
import Instagram3 from "../../images/Instagram3.jpeg";
import Instagram4 from "../../images/Instagram4.jpeg";
import Instagram5 from "../../images/Instagram5.jpeg";
import { getActiveProducts } from '../../utils';
import { Product } from '../../interfaces';


const TitleStyle = styled('p')({
    lineHeight: '28px',
    textAlign: 'center',
    color: '#999',
    borderBottom: '1px solid transparent',
    paddingBottom: '4px',
    display: 'inline-block',
    fontWeight: '500',
    textDecoration: 'none',
    marginLeft: '36px',
    fontSize: '24px',
    padding: '8px',

    '&:hover': {
        cursor: 'pointer'
    }
})

const SaleTitle = styled('h2')({
    fontSize: '34px',
    lineHeight: '1.3',
    fontFamily: 'Jost',
    fontWeight: '500',
    letterSpacing: 'inherit'
})

const BLOG_POSTS = [
    {
        image: Blog1,
        category: 'TRENDS',
        date: 'April 26, 2022',
        title: 'What I Learned By Embracing French Guy Style',
        content: 'Have you ever been in a fashion rut? The kind where you look into your...',
        link: 'https://muhiraexpress.com.au/fashion/'
    },
    {
        image: Blog2,
        category: 'TRENDS',
        date: 'April 26, 2022',
        title: 'Street Style in 2017 vs. 2022',
        content: 'We’ve finally tagged as far back to fall 2017 in our Street Style Trend Tracker, and...',
        link: 'https://www.styleportal.co/street-style-in-2017-vs-2022/'
    },
    {
        image: Blog3,
        category: 'MODELS',
        date: 'April 26, 2022',
        title: 'How I Found My Birthing Team As a Mother-to-Be',
        content: 'When model Grace Mahary began to consider motherhood, she felt an overwhelming hesitancy. Still, she and her...',
        link: 'https://www.vogue.com/article/grace-mahary-journey-to-motherhood'
    },
]

const POSTS = [
    {
        image: Instagram1
    },
    {
        image: Instagram2
    },
    {
        image: Instagram3
    },
    {
        image: Instagram4
    },
    {
        image: Instagram5
    },
]

const CenterSection = styled('div')({
    margin: '0 auto',
    width: '65%',
    maxWidth: '1170px'
})

export const HomePageContainer = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeProducts, setActiveProducts] = useState<Product[]>([])
    const [activeSelection, setActiveSelection] = useState<string>("best_seller")

    const onProductsSelectionClick = (selection: string) => {
        setActiveSelection(selection)
        if (selection === "new") {
            setActiveProducts(getActiveProducts(products, "new"))
        } else if (selection === 'sales') {
            setActiveProducts(getActiveProducts(products, "sales"))
        } else {
            setActiveProducts(getActiveProducts(products, "best_seller"))
        }
    }

    useEffect(() => {
        fetch(`https://651451b48e505cebc2eb2031.mockapi.io/products`)
            .then(res => res.json())
            .then(res => {
                // Set all products
                setProducts(res)
                setActiveProducts(getActiveProducts(res, "best_seller"))
            });
    }, [])

    return <div>
        <Navigation />
        <Box
            sx={{
                mt: {
                    xs: '80px',
                    sm: 0
                }
            }}
        >
            <HomePageSlider />
        </Box>
        <Box mt={'4%'}>
            <CenterSection>


                <Box mt={'15%'} display={'flex'} justifyContent={'space-around'}>
                    <TitleStyle className={activeSelection === 'best_seller' ? 'active-product-selection' : ''} onClick={() => onProductsSelectionClick("best_seller")}>Best Sellers</TitleStyle>
                    <TitleStyle className={activeSelection === 'new' ? 'active-product-selection' : ''} onClick={() => onProductsSelectionClick("new")}>New Products</TitleStyle>
                    <TitleStyle className={activeSelection === 'sales' ? 'active-product-selection' : ''} onClick={() => onProductsSelectionClick("sales")}>Sales Products</TitleStyle>
                </Box>
                <Box display={'flex'} flexWrap={'wrap'} rowGap={'1.5rem'} justifyContent={'space-between'} mb={'15%'}
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        }
                    }}
                >
                    {activeProducts.map((currentProduct) => {
                        return <Box flexBasis={'25%'} >
                            <ProductCard id={currentProduct.id} image={currentProduct.images[0]} name={currentProduct.name} price={currentProduct.price} />
                        </Box>
                    })}

                </Box>
            </CenterSection>
        </Box >
        <Box>
            <Box>
                <SaleCountdown />
            </Box>
        </Box>
        <CenterSection>
            <Box display={'flex'} mt={'4%'} justifyContent={'space-between'}
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    }
                }}
            >
                {BLOG_POSTS.map((currentBlog) => {
                    return <Box
                        flexBasis={'32%'}
                        sx={{
                            mt: {
                                xs: 3,
                                sm: 0
                            }
                        }}
                    >
                        <BlogPosts image={currentBlog.image} category={currentBlog.category} date={currentBlog.date} title={currentBlog.title} content={currentBlog.content} link={currentBlog.link} />
                    </Box>
                })}
            </Box>
        </CenterSection>
        <Box display={'flex'} mt={'5%'} justifyContent={'space-between'}
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}
        >
            {POSTS.map((currentPost) => {
                return <Box flexBasis={'19%'}><SocialMediaPost image={currentPost.image} /></Box>
            })}
        </Box>
        <CenterSection>
            <Box display={'flex'} justifyContent={'space-between'} mb={'12%'} mt={'6%'} mr={'6%'}
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    }
                }}
            >
                <Box width="100%">
                    <SaleTitle>Sign up and get up to 20% off your first purchase</SaleTitle>
                    <p>Receive offers, product alerts, styling inspiration and more. By signing up, you agree to our Privacy Policy.</p>
                </Box>
                <Box width="50%" mt={2}>
                    <TextField id="email-subscribe" label="Email" variant="standard" placeholder='Enter your email' fullWidth={true} />
                    <Box mt={3}>
                        <Button variant="contained">Subscribe</Button>
                    </Box>
                </Box>
            </Box>
        </CenterSection>
        <Footer />
    </div >
}