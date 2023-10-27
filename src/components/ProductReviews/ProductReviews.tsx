import React from "react";
import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import { ReviewCard } from "..";
import { Review } from "../../interfaces";

interface Props {
    numberOfReviews: number;
    productName: string;
    reviews: Review[];
}

export const ProductReviews = ({ numberOfReviews, productName, reviews }: Props) => {
    return <div>
        <div>
            <p>{numberOfReviews} reviews for {productName}</p>
            {reviews.map((current) => {
                return <div>
                    <ReviewCard
                        imageLink={current.pictureLink}
                        name={current.name}
                        date={current.date}
                        description={current.comment} />
                </div>
            })}
            <Box>
                <Box>
                    <p>Add your review</p>
                    <div>Your email address will not be published. Required fields are marked *</div>
                </Box>
                <Box display={"flex"} mt={1}>
                    <Box width={'100%'} mr={2}>
                        <TextField id="outlined-basic" label="Name * " variant="outlined" fullWidth inputProps={{
                            autoComplete: 'none'
                        }} placeholder="Name" />
                    </Box>
                    <Box width={'100%'}>
                        <TextField id="outlined-basic" label="Email * " variant="outlined" fullWidth inputProps={{
                            autoComplete: 'none'
                        }} placeholder="Email" />
                    </Box>
                </Box>
                <Box mt={2} display={'flex'}>
                    <Typography component="legend">Your rating</Typography>
                    <Rating name="no-value" value={null} />
                </Box>
                <Box>
                    <p>Your review *</p>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        fullWidth

                    />
                </Box>
                <Box display={'flex'} justifyContent={'center'} my={2}>
                    <Button variant="contained">SUBMIT</Button>
                </Box>
            </Box>
        </div>
    </div>
}