import React from 'react';
import SideBarSection from './SideBarSection';
import Style from '../../styled-components/Wrapper';

let SideBar = ({ sections, selected, select }) => (
  <Style.SidebarColumn>
    <Style.Logo></Style.Logo>
    {sections.map((section, idx) => {
      return <SideBarSection isSelected={section === selected} section={section} select={select} key={idx}></SideBarSection>
    })}
  </Style.SidebarColumn>
)

export default SideBar;