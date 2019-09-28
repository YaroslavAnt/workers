import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    color: #fff;
    padding: 0 20px;
`
const Logotext = styled.p`
    font-size: 24px;
`

const Header = () => {
    return (
        <StyledHeader>
            <Logotext>Workers</Logotext>
            <Link to='/login'>
                <Button variant='contained' color='secondary'>Login</Button>
            </Link>
        </StyledHeader>
    );
}

export default Header;