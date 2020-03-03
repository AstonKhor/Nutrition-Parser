import React from 'react';
import SideBarSection from './SideBarSection';

let SideBar = ({ sections, selected, select }) => (
  <div>
    {sections.map((section, idx) => {
      return <SideBarSection section={section} selected={selected} select={select} key={idx}></SideBarSection>
    })}
  </div>
)

export default SideBar;