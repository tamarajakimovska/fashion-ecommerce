import React from "react";
import { AccountListItem } from "..";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

interface Props {
    activeListItem: string;
    onAccountListItemClick: (name: string) => void;
}

export const AccountListItems = ({ activeListItem, onAccountListItemClick }: Props) => {
    return <div>
        <AccountListItem
            name="Orders"
            icon={<ShoppingCartIcon />}
            isActive={activeListItem === 'orders' ? true : false}
            onClick={() => onAccountListItemClick("orders")} />
        <AccountListItem
            name="Account Details"
            icon={<PersonSearchIcon />}
            isActive={activeListItem === 'account_details' ? true : false}
            onClick={() => onAccountListItemClick("account_details")} />
    </div>
};
