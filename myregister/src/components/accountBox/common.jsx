// hold common text and input fields
import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

// html form handles submissions
export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

// for hyperlinks, like Terms of Service
export const MutedLink = styled.a`
    font-size: 11px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none; // remove underlying
`;

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(241, 196, 15);
    font-weight: 500;
    text-decoration: none; // remove underlying
    margin: 0 4px;
`;

/* sign-up keyword - highlighted in yellow */
export const HighlightLink = styled.a`
  font-size: 11px;
  color: rgb(11, 32, 238);
  font-weight: 500;
  text-decoration: none; 
  margin: 0 4px;
`;

export const CustomInput = styled.input`
    // width: 100%; // full available width
    width: 95%;
    max-block-size: none;
    height: 42px;
    // justify-items: center;
    // align-content: center;
    // align-items: center;
    // justify-content: right;
    outline: none;
    // border: 1px solid rgba(200, 200, 200, 0.0.3); // have border be super muted
    // border: 2px solid #4fbf9f;
    border-radius: 3px;
    border-bottom: 1.4px solid transparent; // user focuses on input, gives full back border, doesn't change style size
    // padding: 0px 10px;
    padding: 0.25em 1em;
    // font-family: 'FontAwesome';
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::icon {
        font-family: "FontAwesome";
    }

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(0,45,8);
    }
`;

export const SubmitButton = styled.button`
    // width: 100%;
    width: 50%;
    display: inline-block;
    min-width: min-content;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px; // rounded smooth corners
    display: block;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg, 
        rgba(241, 196, 15, 1) 20%, 
        rgba(243, 172, 18, 1) 100%
    );
    
    &:hover {
        filter: brightness(1.03);
    }
`;


export const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-color: #333;
    padding: 0px;
    background-color: lightblue;
    color: black;
    font-weight: bold;
`;

export const StyledLi = styled.li`
    float: left;
    height: 100%;
    padding: 10px;
    &:hover {
        background-color: red;
    }
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`;

export const StyledA = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

export const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: lightblue;
    padding: 10px;
`;