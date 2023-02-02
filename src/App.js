import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter,Routes,Route}  from "react-router-dom"

// key="51e689a74cd14dc38756453f72124e04"

export default class App extends Component{
  
  render(){
    return(

      <div>
       <BrowserRouter>
       <Navbar/>
        {/* <News /> */}

        <Routes>
        <Route path="/" element={<News key="general" pageSize={5} country="in" category="general"/>}></Route>
          <Route path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>}></Route>
          <Route path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>}></Route>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route>
          <Route path="/general" element={<News key="general" pageSize={5} country="in" category="general"/>}></Route>
          <Route path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>}></Route>
          <Route path="/science" element={<News key="science" pageSize={5} country="in" category="science"/>}></Route>
          <Route path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>}></Route>
        

        </Routes>
       </BrowserRouter>
        
        
     
     
      </div>
    )
  }
}