import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;
  z-index: -10;
  background: #49b9d3;
  padding-left: 275px;
  color: white;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  outline: none;
  border: none;
  border-shadow: 0px 5px;
`

const Backlay = styled.div`
  position: fixed;
  top: 80px;
  left: 265px;
  background: #135677;
  height: 400px;
  z-index: 0;
`

export { Header, Backlay };