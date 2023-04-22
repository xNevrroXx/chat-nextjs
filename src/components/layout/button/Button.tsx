import React, { ReactNode, useState } from 'react';
// styles
import styled, { keyframes, css } from "styled-components";
import {TButtonComponentProps} from "@/components/layout/button/button.interface";
 
interface IProps {
  gradientText?: string,
  gradientButton?: string,
  animated?: boolean,
  children: ReactNode
} 

const onActiveAnimation = keyframes`
  0% {
    width: 0%;
    height: 0%;
  }
  100% {
    width: 100%;
    height: 100%; 
  }
`;  
 
const StyledButton = styled.button.attrs({
  animated: true
})` 
  width: max-content;
  min-width: 10rem;  
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 3px violet;
  background: none;
  transition: 125ms all;
  font-weight: 500;
  color: white;
  ${(props: IProps) => props.gradientText && ` 
    color: transparent;
    background: ${props.gradientText || "black"};
    -webkit-background-clip: text;
  `}
  ${(props: IProps) => props.gradientButton && `
    position: relative;
    overflow: hidden;
    &::before {
      z-index: -1;
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0; 
      left: 0;
      background: ${props.gradientButton || "black"};
    }
  `}
  ${(props: IProps) => props.animated && css`
    position: relative;
    &::after {
      z-index: -1;
      content: "";
      display: block;
      position: absolute;
      width: 0%;
      height: 0%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-image: radial-gradient(rgba(0,0,0,.3) 10%,rgba(0,0,0,.1) 60%, transparent 80%);
      transition: 50ms all;
    }
    &[data-animate="true"] {
      &::after {
        animation: ${onActiveAnimation} 250ms forwards ease-out; 
      }
    }
  `}
  &:hover {
    opacity: 0.8;
  }
`; 

const Button = ({ children, ...otherProps }: TButtonComponentProps) => {
  const [animate, setAnimate] = useState<boolean>(false);

  return (
    <StyledButton
      onClick={() => setAnimate(true)}
      onAnimationEnd={() => setAnimate(false)}
      {...otherProps} 
      {...{ "data-animate": animate ? "true" : "white" }}
    >{children}</StyledButton>
  )
}

export { Button }; 