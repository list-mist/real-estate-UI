import React from "react";
import Header from "./Header";
import styled from "styled-components";
import LoginAndSignUp from "./UserAuth/LoginAndSignUp";
import HomePage from "./LandingPage/HomePage";
const StyledDiv = styled.div`
   background-color : blue
`


const LandingPage = () => {
    

    return <>
     <Header/>
     <LoginAndSignUp/>
     <HomePage/>
    </>
}

export default LandingPage;


// <LandingPage/>
