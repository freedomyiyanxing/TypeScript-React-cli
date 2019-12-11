import React, { useState } from 'react';
/* eslint-disable */
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinkRouter from '../../common/material-ui/links';

// interface HandleChange {
//   (event: object, value: number): void
// }

const Header: React.FC = () => {
  const [value, setValue] = useState(0);

  // const handleChange = (newValue: number) => (event: any) => {
  //   console.log(event, newValue);
  //   setValue(newValue);
  // };
  const handleChange = function(event: React.ChangeEvent<{}>): void {
    console.log(event.currentTarget);
    // setValue(newVale);
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: 50 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        component="div"
        indicatorColor="primary"
      >
        <Tab value={0} label="Active" />
        <Tab value={1} label="Disabled" />
        {/*<LinkRouter to="/">SSSSSS</LinkRouter>*/}
        {/*<LinkRouter to="/theme-setting">AAA</LinkRouter>*/}
      </Tabs>
    </div>
  );
};

export default Header;
