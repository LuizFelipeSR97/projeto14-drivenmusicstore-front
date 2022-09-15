import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import React from 'react'

import SignIn from './signin';
import SignUp from './signup';
import Main from './main';

export default function Site () {

    let token = "";
    
    return (

    <Page>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main token/>} />
                <Route path="/signin" element={<SignIn token/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    </Page>
    )
}

const Page = styled.div`
    background-color: #EBECF0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`