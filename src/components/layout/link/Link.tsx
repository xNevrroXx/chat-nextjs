import {useState} from "react";
import styled from "styled-components";
import { TLinkComponentProps } from "./link.interface";

interface IProps {
    gradientText?: string,
    gradientButton?: string,
    animated?: boolean,
}

const StyledLink = styled.a`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: none;
    transition: 125ms all;
    font-weight: 500;
    text-decoration: none;
    ${(props: IProps) => props.gradientText && `
      color: transparent;
      background: ${props.gradientText || "black"};
      -webkit-background-clip: text;
    `}
    &:hover {
      opacity: 0.8;
    }
  `; 

const StyledLinkComponent = ({ children, ...otherProps }: TLinkComponentProps) => { 
const [animate, setAnimate] = useState<boolean>(false); 
 
return (
    <StyledLink
        onClick={() => setAnimate(true)}
        onAnimationEnd={() => setAnimate(false)}
        {...otherProps} 
        {...{ "data-animate": animate ? "true" : "false" }}
    >{children}</StyledLink> 
)
}

export { StyledLinkComponent as StyledLink };