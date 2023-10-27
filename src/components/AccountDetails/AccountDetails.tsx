import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { AccountDetailsBody, AccountListItems, AccountOrders } from "..";
import { Context } from "../../context";

const CenterSection = styled('div')(({ theme }) => ({
    margin: '0 auto',
    width: '65%',
    maxWidth: '1170px',
    paddingTop: '50px',
    paddingBottom: '50px',
    [theme.breakpoints.down("sm")]: {
        width: '80%',
        paddingBottom: '32px'
    },
}))


export const AccountDetails = () => {
    const [activeAccoutItem, setActiveAccountItem] = useState<string>('orders')
    const user = useContext(Context);

    return <CenterSection>
        <Box display="flex"
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}
        >

            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '40%'
                }
            }}>
                <AccountListItems
                    activeListItem={activeAccoutItem}
                    onAccountListItemClick={(name: string) => {
                        setActiveAccountItem(name)
                    }}
                />
            </Box>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '60%'
                },
                pl: {
                    xs: 0,
                    sm: 3
                },
                pt: {
                    xs: 3,
                    sm: 0
                }
            }}>
                {activeAccoutItem === 'orders'
                    ? <AccountOrders order={6050} date={'October 7, 2023'} status={'Processing'} total={295} />
                    : <AccountDetailsBody
                        firstName={user.firstName}
                        lastName={user.lastName}
                        displayName={user.displayName}
                        email={user.email} />}
            </Box>
        </Box>
    </CenterSection >
}