import React, { useEffect, useState } from "react";
import Background from "../../images/countdown-image.png";
import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router";

const CountdownBackground = styled('div')({
    width: '100%',
    backgroundColor: '#f8f4f1',
})

const CountdownBox = styled('div')({
    border: '1px solid black',
    borderRadius: '4px',
    padding: '1.5rem 0.5rem',
    marginRight: '3%',
    marginBottom: '10%'

})

const DateNumbers = styled('div')({
    fontSize: '34px',
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
    width: '64px',

})

const Timer = styled('div')({
    fontSize: '17px',
    fontFamily: 'Jost',
    color: '#11111',
    textAlign: 'center'

})

const SaleTitle = styled('h2')({
    fontSize: '27px',
    color: '#ed0006',
    fontFamily: 'Jost'
})

const SaleProduct = styled('h2')({
    fontSize: '36px',
    color: '#11111',
    fontFamily: 'Jost',
    lineHeight: '1.3',
    marginBottom: '8px'
})

let TODAYS_DATE = new Date();
const NUMBER_OF_DAYS_TO_ADD = 30;
const COUNTDOWN_DATE = TODAYS_DATE.setDate(TODAYS_DATE.getDate() + NUMBER_OF_DAYS_TO_ADD);

export const SaleCountdown = () => {
    const navigate = useNavigate();
    const [countdownDate, setCountdownDate] = useState<{ days: number, hours: number, minutes: number, seconds: number }>({
        days: 29,
        hours: 23,
        minutes: 59,
        seconds: 59
    })

    useEffect(() => {
        const timerInterval = setInterval(() => {
            let now = new Date().getTime();
            let distance = COUNTDOWN_DATE - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdownDate({
                days,
                hours,
                minutes,
                seconds
            })

            if (distance < 0) {
                clearInterval(timerInterval);
            }
        }, 1000)
    })

    return <CountdownBackground>
        <Box display={'flex'}

            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>
            <Box ml={'15%'} mr={'5%'} width={'100%'}
                sx={{
                    ml: {
                        xs: 0,
                        sm: '15%'
                    },
                    mr: {
                        xs: 0,
                        sm: '5%'
                    }
                }}
            >
                <img src={Background} width={'100%'} alt="sale-countdown" />
            </Box>
            <Box mt={'6%'} width={'100%'}
                sx={{
                    pl: {
                        xs: '32px',
                        sm: 0
                    },
                    pr: {
                        xs: '32px',
                        sm: 0
                    },
                    mb: {
                        xs: '32px',
                        sm: 0
                    }
                }}
            >
                <SaleTitle>SALE UP TO 60%</SaleTitle>
                <SaleProduct>Denim Longline Skirt
                </SaleProduct>
                <Box display={'flex'}>
                    <CountdownBox>
                        <DateNumbers>{countdownDate.days}</DateNumbers>
                        <Timer>Days</Timer>
                    </CountdownBox>
                    <CountdownBox>
                        <DateNumbers>{countdownDate.hours}</DateNumbers>
                        <Timer>Hours</Timer>
                    </CountdownBox>
                    <CountdownBox>
                        <DateNumbers>{countdownDate.minutes}</DateNumbers>
                        <Timer>Minutes</Timer>
                    </CountdownBox>
                    <CountdownBox>
                        <DateNumbers>{countdownDate.seconds}</DateNumbers>
                        <Timer>Seconds</Timer>
                    </CountdownBox>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: {
                            xs: 'center',
                            sm: 'flex-start'
                        }
                    }}
                >
                    <Button
                        variant="contained" onClick={() => navigate(`/product-description/bcd22ea2-3602-4f64-9eed-b8226ef71d6b`)} >Shop Now
                    </Button>
                </Box>
            </Box>

        </Box>

    </CountdownBackground >

}