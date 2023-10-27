import React from "react";
import { styled } from '@mui/system';
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faCcMastercard, faCcStripe } from "@fortawesome/free-brands-svg-icons";


const MyFooter = styled('footer')({
    width: '100vw',
    backgroundColor: '#000'
})
const FooterList = styled('div')(({ theme }) => ({
    fontFamily: 'Jost,Sans-serif',
    fontSize: '16px',
    width: '70%',
    margin: '0 auto',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px 0',
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column'
    },
}))

const List = styled('div')({
    display: 'flex',
    flexDirection: 'column'
})

const ListTitle = styled('div')({
    fontWeight: 'bold',
    marginBottom: '16px',
})

const Hr = styled('hr')({
    width: '95%',
    margin: '0 auto',
    borderStyle: 'solid',
    borderWidth: '1px 0 0',
    borderColor: '#FFFFFF22',

})

const Copyrights = styled('div')({
    width: '70%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    padding: '40px 0'
})

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return <MyFooter>
        <FooterList>
            <div>

                <ListTitle>About Shop</ListTitle>


                <List>Lorem ipsum dolor sit amet,
                    <br />  consectetur adipisicing elit.
                    <p>   E. hello@uxper.com </p>
                    <p>  T. (00) 342 489 33 </p>

                </List>
            </div>
            <div>

                <ListTitle>Company</ListTitle>

                <List>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Store Locator </p>
                    <p> Contact Us </p>
                </List>
            </div>
            <div>

                <ListTitle>Customer Care</ListTitle>

                <List>
                    <p> Size Guide </p>
                    <p>  Help & FAQs </p>
                    <p> Return My Order </p>
                    <p>  Refer A Friend </p>
                </List>
            </div>
            <div>

                <ListTitle>Quick Links</ListTitle>

                <List>
                    <p>Duties & Taxes</p>
                    <p> Shipping Info </p>
                    <p>Privacy Policy</p>
                    <p>Term Conditions</p>
                </List>
            </div>
            <div>

                <ListTitle> Follow Us</ListTitle>

                <List>
                    <p>Instagram </p>
                    <p>Facebook</p>
                    <p>Pinterest</p>
                    <p>Tiktok</p>
                </List>
            </div>
        </FooterList>
        <Hr />
        <Copyrights>
            <div>  © {currentYear}. All rights reserved</div>
            <Box display={'flex'}>
                <Box mr={2}>  <FontAwesomeIcon icon={faCreditCard} size="lg" /> </Box>
                <Box mr={2}>  <FontAwesomeIcon icon={faCcMastercard} size="lg" /> </Box>
                <Box mr={2}>  <FontAwesomeIcon icon={faCcStripe} size="lg" /> </Box>
            </Box>

        </Copyrights>
    </MyFooter>

}

