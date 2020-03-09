import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;
  z-index: 5000;
  background: #49b9d3;
  padding-left: 275px;
  color: white;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  outline: none;
  border: none;
  border-shadow: 0px 5px;
`

const HeaderLeft = styled.span`
  padding: 13px 0px 0px 15px;
  font-size: 30px;
`

const HeaderRight = styled.span`
  padding: 0px 10px;
  font-size: 25px;
  disply: flex;
  flex-direction: row;
  justify-content: space-evenly;
  &:focus {
    outline: none;
  }
`

export { Header, HeaderLeft, HeaderRight };