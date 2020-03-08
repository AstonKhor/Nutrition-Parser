import React from 'react';
import Style from '../../styled-components/Wrapper';

//add conditional formatting for selected section

let SidebarSection = ({ isSelected, section, select }) => (
  <Style.SidebarSection onClick={select} isSelected={isSelected} section={section}>{section}</Style.SidebarSection>
)

export default SidebarSection;