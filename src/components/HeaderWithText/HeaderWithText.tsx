import React from "react";
import { styled } from '@mui/system';

const MyComponent = styled('div')({
  width: '100vw',
  height: '40vh',
  backgroundColor: '#faf0e8',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  fontFamily: 'Jost',
});

const HeaderDescription = styled('h2')({
  fontSize: '46px'
})

const HeaderPage = styled('h6')({
  fontSize: '17px',
  color: '#c8815f'
})

interface Props {
  page: string;
  firstDescription: string;
  secondDescription: string;
}

// The comment below is same as the example, but without destructuring initially
// export const HeaderWithText = (props: Props) => {
export const HeaderWithText = ({ page, firstDescription, secondDescription }: Props) => {
  // const { page } = props;

  return (
    <MyComponent>
      <div>
        <HeaderPage> {page} </HeaderPage>

        <HeaderDescription> {firstDescription} </HeaderDescription>
        <HeaderDescription> {secondDescription} </HeaderDescription>
      </div>

    </MyComponent>
  );
};
