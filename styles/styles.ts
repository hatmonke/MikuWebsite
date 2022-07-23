//@ts-ignore
import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p: { color: any; }) => p.color || "rgb(209 213 219)"};
  color: ${(p: { color: any; }) => (p.color ? "#000" : "#000")};
  font-size: 1rem;
  font-weight: 450;
  width: 100%;
  border: 2px solid rgb(107 114 128);
  border-radius: 30px;
  padding: 12px;
  cursor: pointer;
  max-width: 200px;
  transition: all 0.2s ease-in-out;

  &:hover{
    color: #000;
    border: 2px solid rgb(156 163 175);
  }
`;

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 5rem 0 5rem;
  min-height:100vh;
  @media only screen and (max-width: 1024px) {
    padding: 5rem 0 5rem;
  }
`;

export const Cimg = styled("img")`

  display: block;
  margin-left: auto;
  margin-right: auto;
  width:25%;
   height:auto;
  @media only screen and (max-width: 769px) {
    width:100%;
  }
  filter:         drop-shadow(0px 0px 4px #000 ); 
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "astakhov";
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const CardWrap = styled("div")`
  margin-top:2%;
  margin-bottom:2%;
  margin-left:25%;
  margin-right:25%;
  color:#000;
  padding:3%;
  border-radius:20px;
  border: 5px rgba(255,255,255,0.7);
  background-color: rgba(255,255,255,0.7);
  text-align:center;
  font-size:1.2rem;
  @media only screen and (max-width: 769px) {
    margin-left:5%;
    margin-right:5%;
  }
`;

