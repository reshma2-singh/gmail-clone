import React from 'react';
import Header from "./Header"
import Sidebar from "./Sidebar"
import {BrowserRouter} from "react-router-dom"
import Mail from "./Mail"
import EmailList from "./EmailList"
import SendMail from "./SendMail"
import './App.css';
import {Route,Switch} from "react-router-dom"
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice"




function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <>
    <BrowserRouter>
    <div className="app">
      <Header/>
      <div className="app__body" >
      <Sidebar/>
      
      <Switch>
        <Route path="/mail" component={Mail}/>
        <Route path="/" component={EmailList}/>
      </Switch>
      </div>
      {sendMessageIsOpen &&<SendMail/>}
      </div>
  
    </BrowserRouter>
    </>
  );
}

export default App;
