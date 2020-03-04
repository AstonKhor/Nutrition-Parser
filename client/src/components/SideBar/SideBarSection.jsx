import React from 'react';
import Style from '../../styled-components/Wrapper';

//add conditional formatting for selected section

let SidebarSection = ({ section , selected, select }) => (
  <Style.SidebarSection onClick={select} section={section}>{section}</Style.SidebarSection>
)

export default SidebarSection;