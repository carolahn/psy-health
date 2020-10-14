import styled from "styled-components";
import { ButtonProps } from './index'

const StyledButton = styled.button<Pick<ButtonProps, "width" | "height" | "fontSize"  >>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0 2em;
  background: #053559;
  color: #fff;
  overflow: hidden;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${(props) => props.fontSize || "19px"};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    margin: 0;
    padding: 10px 0;
    opacity: 0;
    color: #fff;
    font-weight: bold;

    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &::after {
    content: attr(data-text);
    position: absolute;
    pointer-events: none;
    padding: 10px 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    
  }
  &:hover {
    background-color: #02223b;
  }
  &:hover::after {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    
  }

  &:active {
    background-color: #70a3ef;
  }
  &:hover > span {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }


  


  &:hover > span:nth-child(1) {
    -webkit-transition-delay: 0.045s;
    transition-delay: 0.045s;
  }
  &:hover > span:nth-child(2) {
    -webkit-transition-delay: 0.09s;
    transition-delay: 0.09s;
  }
  &:hover > span:nth-child(3) {
    -webkit-transition-delay: 0.135s;
    transition-delay: 0.135s;
  }
  &:hover > span:nth-child(4) {
    -webkit-transition-delay: 0.18s;
    transition-delay: 0.18s;
  }
  &:hover > span:nth-child(5) {
    -webkit-transition-delay: 0.225s;
    transition-delay: 0.225s;
  }
  &:hover > span:nth-child(6) {
    -webkit-transition-delay: 0.27s;
    transition-delay: 0.27s;
  }
  &:hover > span:nth-child(7) {
    -webkit-transition-delay: 0.315s;
    transition-delay: 0.315s;
  }
  &:hover > span:nth-child(8) {
    -webkit-transition-delay: 0.36s;
    transition-delay: 0.36s;
  }
  &:hover > span:nth-child(9) {
    -webkit-transition-delay: 0.405s;
    transition-delay: 0.405s;
  }
  &:hover > span:nth-child(10) {
    -webkit-transition-delay: 0.45s;
    transition-delay: 0.45s;
  }
  &:hover > span:nth-child(11) {
    -webkit-transition-delay: 0.50s;
    transition-delay: 0.50s;
  }
  &:hover > span:nth-child(12) {
    -webkit-transition-delay: 0.55s;
    transition-delay: 0.55s;
  }
  &:hover > span:nth-child(13) {
    -webkit-transition-delay: 0.60s;
    transition-delay: 0.60s;
  }
  &:hover > span:nth-child(14) {
    -webkit-transition-delay: 0.65s;
    transition-delay: 0.65s;
  }
  &:hover > span:nth-child(15) {
    -webkit-transition-delay: 0.70s;
    transition-delay: 0.70s;
  }
  &:hover > span:nth-child(16) {
    -webkit-transition-delay: 0.75s;
    transition-delay: 0.75s;
  }
  &:hover > span:nth-child(17) {
    -webkit-transition-delay: 0.80s;
    transition-delay: 0.80s;
  }
  &:hover > span:nth-child(18) {
    -webkit-transition-delay: 0.85s;
    transition-delay: 0.85s;
  }
  &:hover > span:nth-child(19) {
    -webkit-transition-delay: 0.90s;
    transition-delay: 0.90s;
  }
  &:hover > span:nth-child(20) {
    -webkit-transition-delay: 0.95s;
    transition-delay: 0.95s;
  }
  &:hover > span:nth-child(21) {
    -webkit-transition-delay: 1s;
    transition-delay: 1s;
  }
  &:hover > span:nth-child(22) {
    -webkit-transition-delay: 1.05s;
    transition-delay: 1.05s;
  }
  &:hover > span:nth-child(23) {
    -webkit-transition-delay: 1.10s;
    transition-delay: 1.10s;
  }
  &:hover > span:nth-child(24) {
    -webkit-transition-delay: 1.15s;
    transition-delay: 1.15s;
  }
  &:hover > span:nth-child(25) {
    -webkit-transition-delay: 0.120s;
    transition-delay: 0.120s;
  }
  &:hover > span:nth-child(26) {
    -webkit-transition-delay: 0.125s;
    transition-delay: 0.125s;
  }&:hover > span:nth-child(27) {
    -webkit-transition-delay: 0.130s;
    transition-delay: 0.130s;
  }
  &:hover > span:nth-child(28) {
    -webkit-transition-delay: 0.135s;
    transition-delay: 0.135s;
  }
  &:hover > span:nth-child(29) {
    -webkit-transition-delay: 1.40s;
    transition-delay: 1.40s;
  }
  &:hover > span:nth-child(30) {
    -webkit-transition-delay: 1.45s;
    transition-delay: 1.45s;
  }

`;

export default StyledButton;
