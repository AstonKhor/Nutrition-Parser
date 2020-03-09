import React from 'react';
import Style from '../../styled-components/Wrapper';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

let Header = ({ section }) => {
  return (
      <Style.Header>
        <Style.HeaderLeft>
          {section}
        </Style.HeaderLeft>
        <Style.HeaderRight>
          <IconButton color="inherit">
            <Badge badgeContent={Math.floor(Math.random() * 10)} color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={Math.floor(Math.random() * 5)} color="primary" >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="primary" >
              <Avatar alt="Cindy Baker" src={`/images/header/avatar${Math.ceil(Math.random() * 3)}.jpg`} />
            </Badge>
          </IconButton>
        </Style.HeaderRight>
      </Style.Header>
  )
}

export default Header;