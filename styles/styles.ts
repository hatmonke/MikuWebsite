//@ts-ignore
import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p: { color: any; }) => p.color || "rgba(0,0,0,0)"};
  color: ${(p: { color: any; }) => (p.color ? "#00ECFF" : "#00ECFF")};
  font-size: 1rem;
  font-weight: 800;
  width: 100%;
  border: 1px solid #00ECFF;
  border-radius: 15px;
  padding: 13px 0;
  cursor: pointer;
  
  margin-top: 0.625rem;
  max-width: 200px;
  transition: all 0.2s ease-in-out;

  &:hover{
    color: #fff;
    text-shadow: 0px 0px 20px #fff;
    border: 1px solid #00ECFF;
    background: radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(0,236,255,1) 100%);
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
margin:5%;
padding:5%;
border-radius:20px;
border: 1px solid #fff;
background-color: rgba(0,0,0,0.9);
text-align:center;

box-shadow: 0px 0px 25px 12px #00ECFF;
font-size:1.2rem;
  `;

