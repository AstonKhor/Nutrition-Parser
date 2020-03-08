import styled from "styled-components";

const SidebarColumn = styled.div`
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

const Logo = styled.button`
background: url(./images/sidebar/logo.png) no-repeat;
background-size: 50px 50px;
background-position: 25% 25%;
`

const SidebarSection = styled.button`
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  border: none;
  border-radius: 7px;
  margin: 20px 10px 5px 10px;
  width: 230px;
  height: 55px;
  line-height: 55px;
  text-align: left;
  padding-left: 55px;
  color: #135677;
  font-weight: bold;
  background: url(./images/sidebar/${props => props.section.toLowerCase().replace(' ', '')}.png) no-repeat;
  background-size: 20px 20px;
  background-position: 8% center;
  background-color: ${props => props.isSelected ? '#fefbf8' : '#ffeddf'};
  font-size: 20px;
  &:hover {
    background-color: #fefbf8;
  }
  &:focus {
    outline: none;
  }
`

export { SidebarColumn, Logo, SidebarSection };