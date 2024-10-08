import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { colors, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {

 const [open, setOpen] = useState(false);


  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}>
            <MenuRoundedIcon className='link'/>
          </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=> setOpen(false)}
          >
            <div className="drawer-div">
                <NavLink to="/">
                    <p className="link">Home</p>
                </NavLink>
                <NavLink to="/compare">
                    <p className="link">Compare</p>
                </NavLink>
                <NavLink to="/watchlist">
                    <p className="link">Watchlist</p>
                </NavLink>
                <NavLink to="/dashboard">
                    <p className="link">Dashboard</p>
                </NavLink>
            </div>
          </Drawer>
    </div>
  );
}
