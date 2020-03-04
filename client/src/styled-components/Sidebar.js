import styled from "styled-components";

const SidebarColumn = styled.button`
  position: fixed;
  border: none;
  left: 0px;
  top: 0px;
  width: 265px;
  height: 100%;
  z-index: 10;
  background: #ffeddf;
  color: #135677;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  outline: none;
`

const Logo = styled.div`
background: url(./images/sidebar/logo.png) no-repeat;
background-size: 50px 50px;
background-position: 25% 25%;
`

export { SidebarColumn, Logo };