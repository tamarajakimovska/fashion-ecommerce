import React from "react";
import CartImage from "../../images/CartImage.jpeg"
import { styled } from "@mui/material";


const BackgroundImage = styled('div')({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${CartImage})`,
    width: '100%',
    height: '50vh'
})

const Wrapper = styled('div')({
    fontFamily: 'Jost',
    color: '#11111',
    letterSpacing: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    marginLeft: '18%'
})

const Title = styled('h2')({
    fontSize: '56px',
    fontWeight: '500%',
})

interface Props {
    title: string;
}

export const HeaderBackground = ({ title }: Props) => {
    return <div>
        <BackgroundImage>
            <Wrapper>
                <Title>{title} </Title>
            </Wrapper>
        </BackgroundImage>
    </div>
}