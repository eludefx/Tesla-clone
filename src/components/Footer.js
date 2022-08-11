import React from 'react'
import styled from "styled-components"

function Footer() {
    return (
        <Container>
            <FooterItems>
                <a href="#">Tesla © 2021</a>
            </FooterItems>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    min-height: 60px;
    display: flex;
    align-items: center;
`

const FooterItems = styled.div`
display: flex;
align-items: center;
    a {
        font-size: 15px;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`