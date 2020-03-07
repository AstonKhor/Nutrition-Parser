import styled from "styled-components";

const SidebarSection = styled.div`
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  border-radius: 7px;
  background-color: #ffeddf;
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
  font-size: 20px;
  &:hover {
    background-color: #fefbf8; // <Thing> when hovered
  }
`

export { SidebarSection };