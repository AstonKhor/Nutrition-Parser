import React from 'react';
import Style from '../../styled-components/Wrapper';
import Button from '@material-ui/core/Button';

//Add more Button actions

let SidebarSection = ({ isSelected, section, select }) => (
  <Style.SidebarSection onClick={select} isSelected={isSelected} section={section}>{section}</Style.SidebarSection>
)

export default SidebarSection;