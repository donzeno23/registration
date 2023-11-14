import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faVoicemail, faPassport } from "@fortawesome/free-solid-svg-icons";
import { BoldLink, BoxContainer, FormContainer, CustomInput, MutedLink, SubmitButton, HighlightLink } from "./common";
import { InputGroup, InputGroupText, Input } from "reactstrap";
import { Marginer } from "../marginer";

import { FaUserLock, FaUserAlt, FaKey, FaAddressBook, FaKeycdn, FaEye } from "react-icons/fa";
import { FcHeadset } from "react-icons/fc";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <label><b>Email</b></label>
            <div className="inputs">
                <div className="input">
                <label htmlFor="email">
                    <InputGroup>
                        <CustomInput type="email" placeholder="email@address"/>
                        <InputGroupText>
                            <FaUserAlt />
                        </InputGroupText>
                    </InputGroup>
                </label>
                </div>
                <div className="input">               
                <label><b>Password</b></label>
                    <InputGroup>
                        <InputGroupText>
                            <CustomInput type="password" placeholder="Enter Password" addonType="append"/>
                            {/* <FaKey /> */}
                            <FaEye />
                            {/*<FontAwesomeIcon icon={FaAddressBook} />*/}
                        </InputGroupText>
                    </InputGroup>
                </div>
            </div>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Sign in</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
            Don't have an account? 
            <BoldLink href="#" onClick={switchToSignup}>Sign up</BoldLink>
        </MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <MutedLink href="#">
            By clicking "Sign up", you agree to our 
        <HighlightLink href="/service"> terms of service
        </HighlightLink> and acknowledge that you have read and understand our <HighlightLink href="/privacy">privacy policy </HighlightLink>
        and <HighlightLink href="/conduct">code of conduct.</HighlightLink>
      </MutedLink>
    </BoxContainer>
}