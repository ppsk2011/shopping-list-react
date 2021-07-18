import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '@material-ui/core';

const NavTabs = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  };
  return (
    <>
      <AppBar position='sticky'>
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label='Dashboard' component={Link} to='/dashboard' />
          <Tab label='History' component={Link} to='/history' />
          <Tab label='Add' component={Link} to='/add' />
        </Tabs>
      </AppBar>
    </>
  );
}

export default NavTabs;
