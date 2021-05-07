import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton> <MenuIcon/></IconButton>
               
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
                alt=""/>

            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon/>


            </div>
            <div className="header__right">
                <IconButton><AppsIcon/></IconButton>
               <IconButton><NotificationsIcon/></IconButton> 
                <AccountCircleIcon/>
                
                

            </div>
            
        </div>
    )
}

export default Header
