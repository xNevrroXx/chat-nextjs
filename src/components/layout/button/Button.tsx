import React, { ReactNode, useState } from 'react';
// styles
import { keyframes, styled } from '@stitches/react';
import {TButtonComponentProps} from "@/components/layout/button/button.interface";
 
interface IProps {
  gradientText?: string,
  gradientButton?: string,
  animated?: boolean,
  children: ReactNode
} 

const onActiveAnimation = keyframes({
  "0%": {
    width: "0%",
    height: "0%",
  },
  "100%": {
    width: "100%",
    height: "100%", 
  }
});  
 
const StyledButton = styled("button", {
  width: "max-content",
  minWidth: "10rem",  
  height: "2.5rem",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "0 0 3px violet",
  background: "none",
  transition: "125ms all",
  fontWeight: "500",
  color: "black",
  "&:hover": {
    opacity: "0.8",
  },
  variants: {
    // gratientText: {
    //   color: "transparent",
    //   background: "$gradientText"
    //   // -webkit-background-clip: text;
    // },
    gradientButton: {
      // position: "relative",
      // overflow: "hidden",
      "&::before": {
        zIndex: "-1",
        content: "",
        display: "block",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0, 
        left: 0,
        background: "$gradientButton",
    },
    animated: {
      position: "relative",
      "&::after": {
        zIndex: -1,
        content: "",
        display: "block",
        position: "absolute",
        width: "0%",
        height: "0%",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        backgroundImage: "radial-gradient(rgba(0,0,0,.3) 10%,rgba(0,0,0,.1) 60%, transparent 80%)",
        transition: "50ms all"
      },
      '&[data-animate="true"]': {
        "&::after": {
          animationDuration: "250ms",
          animationDirection: "forwards",
          animationTimingFunction: "ease-out",
          animationName: onActiveAnimation
          // animation: ${onActiveAnimation} 250ms forwards ease-out
        }
      }
    }
  }
  // ${(props: IProps) => props.gradientText && ` 
  //   color: transparent;
  //   background: ${props.gradientText || "black"};
  //   -webkit-background-clip: text;
  // `}
  // ${(props: IProps) => props.gradientButton && `
  //   position: relative;
  //   overflow: hidden;
  //   &::before {
  //     z-index: -1;
  //     content: "";
  //     display: block;
  //     position: absolute;
  //     width: 100%;
  //     height: 100%;
  //     top: 0; 
  //     left: 0;
  //     background: ${props.gradientButton || "black"};
  //   }
  // `}
  // ${(props: IProps) => props.animated && css`
  //   position: relative;
  //   &::after {
  //     z-index: -1;
  //     content: "";
  //     display: block;
  //     position: absolute;
  //     width: 0%;
  //     height: 0%;
  //     top: 50%;
  //     left: 50%;
  //     transform: translateX(-50%) translateY(-50%);
  //     background-image: radial-gradient(rgba(0,0,0,.3) 10%,rgba(0,0,0,.1) 60%, transparent 80%);
  //     transition: 50ms all;
  //   }
  //   &[data-animate="true"] {
  //     &::after {
  //       animation: ${onActiveAnimation} 250ms forwards ease-out; 
  //     }
  //   }
  // `}
}});

const Button = ({ children, ...otherProps }: TButtonComponentProps) => {
  const [animate, setAnimate] = useState<boolean>(false);

  return (
    <StyledButton
      onClick={() => setAnimate(true)}
      onAnimationEnd={() => setAnimate(false)}
      {...{ "data-animate": animate ? "true" : "white" }}
      // {...otherProps} 
    >{children}</StyledButton>
  )
}

export { Button }; 