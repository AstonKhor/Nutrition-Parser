import React from 'react';

//add conditional formatting for selected section

let SidebarSection = ({ section , selected, select }) => (
  <div onClick={select}>{section}</div>
)

export default SidebarSection;