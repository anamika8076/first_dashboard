import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppFooter from "./components/appfooter";
import AppHeader from "./components/appheader";
import PageContent from "./components/pagecontent";
import SideMenu from "./components/sidemenu";
import {Space} from"antd";

function App() {
  return (<div className="App">
    <AppHeader/>
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </div>
    <AppFooter/>
    </div>
  )
}

export default App
