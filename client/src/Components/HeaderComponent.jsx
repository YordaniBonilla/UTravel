import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Fingerprint, AccountCircle , SwapHorizontalCircle } from '@material-ui/icons'

function Header (props){
 
 
    return (
       <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink to="/">
          <Button variant="contained" color="secondary">
            Home <Home />
          </Button>
        </NavLink>
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink to="/register">
          <Button  variant="contained" color="secondary">
           Register <Fingerprint />
          </Button>
        </NavLink>
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink to ="/login">
          <Button variant="contained" color="secondary">
            Login <AccountCircle />
          </Button>
        </NavLink>
               </TypoGraphy>
                </ListItemText>

             <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                         <NavLink to ="/swap">
          <Button variant="contained" color="secondary">          
            Swap <SwapHorizontalCircle/>
          </Button>
        </NavLink>
               </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
       
    );
  
}

export default Header