import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUser, faBuildingUser, faPassport, faBusSimple, faAddressBook, faCity, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BoldLink, BoxContainer, FormContainer, CustomInput, MutedLink, SubmitButton } from "./common";
import { DropDownLi, DropDownContent, SubA, StyledA, StyledLi } from "./common";
import { Marginer } from "../marginer";
import Dropdown from 'react-dropdown';
// import Dropdown from 'react-bootstrap/Dropdown';
import { AccountContext } from "./accountContext";

const options = [
    'New Jersey', 'New Mexico', 'New York'
  ];

const defaultOption = options[0];

export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <label><b>Email</b></label>
            <div className="Input">
                <label htmlFor="Email">
                    <CustomInput type="text" placeholder="Enter Email" />
                    <FontAwesomeIcon icon={faEnvelope} />
                </label>
            </div>
            <Marginer direction="vertical" margin={10} />
            <label><b>Password</b></label>
            <div>
                <CustomInput type="password" placeholder="Enter Password"/>
                <FontAwesomeIcon icon={faPassport} />
            </div>
            <Marginer direction="vertical" margin={10} />
            <label><b>Confirm Password</b></label>
            <div>
                <CustomInput type="password" placeholder="Confirm Password"/>
                <FontAwesomeIcon icon={faPassport} />
            </div>
            <Marginer direction="vertical" margin={10} />
            <label><b>First Name</b></label>
            <div className="CustomInput">
                <label htmlFor="FirstName">
                    <CustomInput type="text" placeholder="" />
                    <FontAwesomeIcon icon={faUser} />
                </label>
            </div>
            <Marginer direction="vertical" margin={10} />
            <label><b>Last Name</b></label>
            <div className="Input">
                <label htmlFor="LastName">
                    <CustomInput type="text" placeholder="" />
                    <FontAwesomeIcon icon={faUser} />
                </label>
            </div>
            <Marginer direction="vertical" margin={10} />
            <label><b>Company</b></label>
            <div className="Input">
                <label htmlFor="Company">
                    <CustomInput type="text" placeholder="Company Name" />
                    <FontAwesomeIcon icon={faBuildingUser} />
                </label>
            </div>
            <Marginer direction="vertical" margin={10} />            
            <label><b>Address</b></label>
            <div className="Input">
                <label htmlFor="Address">
                    <CustomInput type="text" placeholder="1234 Main St." />
                    <FontAwesomeIcon icon={faAddressBook} />
                </label>
            </div>
            <Marginer direction="vertical" margin={10} />
            <label><b>Address 2</b></label>
            <div className="Input">
                <label htmlFor="Address2">
                    <CustomInput type="text" placeholder="Apartment, Studio or Floor." />
                    <FontAwesomeIcon icon={faAddressBook} />
                </label>
            </div>
            <Marginer direction="vertical" margin={10} />
            <label><b>City</b></label>
            <div className="Input">
                <label htmlFor="City">
                    <CustomInput type="text" placeholder="" />
                    <FontAwesomeIcon icon={faCity} />
                </label>
            </div>
            <Marginer direction="vertical" margin={10} />       
            <label><b>State</b></label>
            <div className="Dropdown">
            <label htmlFor="State">
            <Dropdown options={options} placeholder="Choose..." />
            </label>
            </div>
            <Marginer direction="vertical" margin={10} />
            <label><b>Zip</b></label>
            <div className="Input">
                <label htmlFor="Zip">
                    <CustomInput type="text" placeholder="" />
                    <FontAwesomeIcon icon={faCode} />
                </label>
            </div>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
            Already have an account? {" "}
            <BoldLink href="#" onClick={switchToSignin}>Sign in</BoldLink>
        </MutedLink>
    </BoxContainer>
}