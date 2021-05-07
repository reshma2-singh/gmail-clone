import { Checkbox } from '@material-ui/core'
import React from 'react'
import {IconButton} from "@material-ui/core"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from "./Section"
import PeopleIcon from '@material-ui/icons/People';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from "./EmailRow"
import {Link} from "react-router-dom"
function EmailList() {
    return (
        <div className="emailList">
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox/>
                <IconButton>
                <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                <RedoIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeftIcon/>

                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>

                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>

                </IconButton>

            </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73EB" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
                
                </div> 
                <div className="emailList__list">
                <Link to ="/mail">
                <EmailRow 
                title="React"
                subject="About"
                description="javascript library"
                time="10am"
            
                />
                </Link>
                <Link to ="/mail">
                 <EmailRow 
                title="firebase"
                subject="About"
                description="realtime database"
                time="10am"
            
                />
                </Link> 

                </div>
        </div>
    )
}

export default EmailList
