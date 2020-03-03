import React from 'react';
import SideBarSection from './SideBarSection';

let SideBar = ({ sections, select }) => (
  <React.Fragment>
    {sections.map((section, idx) => {
      return <SideBarSection section={section} select={select} key={idx}></SideBarSection>
    })}
    <div> </div>
  </React.Fragment>
)

export default SideBar;