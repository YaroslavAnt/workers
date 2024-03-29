import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";


const StyledHeader = styled.header`
    background-color: #333;
    color: #fff;
    `
const Container = styled.div`
padding: 0 20px;
display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin:0 auto;
`
const Logotext = styled.p`
    font-size: 24px;
`

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logotext>Workers</Logotext>
                <Link to='/login'>
                    <Button variant='contained' color='secondary'>Login</Button>
                </Link>
            </Container>
        </StyledHeader>
    );
}

export default Header;