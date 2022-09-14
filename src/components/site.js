import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import React from 'react'

import SignIn from './signin';
import SignUp from './signup';
import Main from './main';

export default function Site () {
    
    return (
    <Page>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    </Page>   
    )
}

const Page = styled.div`
    background-color: #8C11BE;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`