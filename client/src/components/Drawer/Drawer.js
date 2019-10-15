import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import PaymentIcon from '@material-ui/icons/Payment';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { IoIosMenu } from 'react-icons/io';
import './Drawer.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon><SettingsIcon/></ListItemIcon>
          <div className="list-item-text">
            <ListItemText>Settings</ListItemText>
          </div>
        </ListItem>
        <ListItem>
          <ListItemIcon><PaymentIcon/></ListItemIcon>
          <div className="list-item-text">
            <ListItemText className="list-item-text">Payment</ListItemText>
          </div>
        </ListItem>
        <ListItem>
          <ListItemIcon><HelpOutlineIcon/></ListItemIcon>
          <div className="list-item-text">
            <ListItemText className="list-item-text">Support</ListItemText>
          </div>
        </ListItem>
        <ListItem>
          <ListItemIcon><ExitToAppIcon/></ListItemIcon>
          <div className="list-item-text">
            <ListItemText>
              <a href='http://localhost:4000/logout'>Logout</a>
            </ListItemText>
          </div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IoIosMenu className="menu-btn" onClick={toggleDrawer('right', true)}>Open Right</IoIosMenu>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

//TODO: {/* <a href='http://localhost:4000/logout'>Logout</a> */}