import React,{useState} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import EmailList from "./EmailList"
import {useform} from "react-hook-form"
import {useDispatch} from "react-redux"
import { closeSendMessage } from './features/mailSlice';
function SendMail() {
    const dispatch =useDispatch()
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
<CloseIcon onClick ={()=>dispatch(closeSendMessage())} className ="sendMail__close"/>
            </div>
            
                <input  placeholder="To" type = "text" />
                <input  placeholder="subject" />
                <input  placeholder="Message..." type = "text"  className="sendMail__message"/>
                <div className="sendMail__options">
                    <Button type="submit"  className='sendMail__send'>Send</Button>

                </div>
        </div>
    )
}

export default SendMail
