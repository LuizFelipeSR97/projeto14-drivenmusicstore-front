import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import {useState} from 'react'
import UserContext from '../contexts/UserContext';

import SignIn from './signin';
import SignUp from './signup';
import Main from './main';

export default function Site () {

    const [user,setUser] = useState(null)
    
    return (

    <Page>
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
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