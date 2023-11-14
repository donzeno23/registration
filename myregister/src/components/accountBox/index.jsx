import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { AccountContext } from "./accountContext";
import { motion } from "framer-motion";

// simple container frame
const BoxContainer = styled.div`
    width: 580px; // min. width, aligned for all mobile and desktops
    // width: 280px;
    min-height: 800px;
    // min-height: 550px;
    display: flex;
    flex-direction: column;
    // border: 1px solid gray;
    border-radius: 19px; // for soft edges
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28); // make it stand-out, borderized
    position: relative; // rounded curve
    overflow: hidden; // rounded circle out-of-border - to be hidden
`;

// contains the Backdrop and welcome back
const TopContainer = styled.div`
    width: 100%; // full-width
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; // show at end
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

// Animated drop
const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px; // matches BoxContainer
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%; // give full circle, but combined with width & height gives us an egg-shape
    transform: rotate(60deg); // background rotation
    // top: -290px; // background top
    // left: -70px; // background left
    top: -450px;
    // left: -470px;
    right: 60px;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    );
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10; // need this if text doesn't display
    margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%", // full-width
        // height: "1050px", // transition over full-height of container
        height: "2000px", // transition over full-height of container
        borderRadius: "20%", // rectangular shape
        transform: "rotate(60deg)",
        // background: "green",
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3, // in seconds
    stiffness: 30,
};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false); // not expanded is the default, therefore using false
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true); // play animation all the way down
        setTimeout(() => {
            setExpanded(false); 
        // }, 3000); // milliseconds
        }, expandingTransition.duration * 1000 - 1500); //milliseconds
    }
        
    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout( () => {
            setActive("signup"); // moving to sign up
        }, 400); 
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout( () => {
            setActive("signin"); // moving to sign in
        }, 400); 
    }

    const ContextValue = { switchToSignup, switchToSignin };
    
    return (
        <AccountContext.Provider value={ContextValue}>
        <BoxContainer>
            <TopContainer>
                {/* initial false to have no animation at start */}
                <BackDrop 
                    initial={false} 
                    animate={isExpanded ? "expanded" : "collapsed"} 
                    variants={backdropVariants}
                    transition={expandingTransition}
                />
                {active === "signin" && <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>}
                {active === "signup" && <HeaderContainer>
                    <HeaderText>Create</HeaderText>
                    <HeaderText>Account</HeaderText>
                    <SmallText>Please sign-up to continue!</SmallText>
                </HeaderContainer>}

            </TopContainer>
            <InnerContainer>
                {active === "signin" && <LoginForm /> }
                {active === "signup" && <SignupForm /> }
            </InnerContainer>
        </BoxContainer>
        </AccountContext.Provider>
    )
}