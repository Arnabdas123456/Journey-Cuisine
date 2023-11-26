import React from 'react';
import { Component } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
//import { Menuiteams } from './Menuiteams';
import { Menuiteams } from '../Menuiteams';


class Navbar extends Component{
  state = {clicked:false};
  handeleClick = ()=>{
    this.setState({ clicked: !this.state.clicked})
  }
  render(){
    return (
     <nav className="iteams">
      <h1 className='logo'>Journey Cuisine</h1>

      <div className='menu-icon' onClick={this.handeleClick}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={this.state.clicked ? "menu active" : "menu"}>
        {Menuiteams.map((iteam, index)=>{
          return(
            <li key={index}>
            <Link className={iteam.cName} to={iteam.url}>
             <i className={iteam.icon}></i>{iteam.title}
            </Link>
          </li>
          );
        })}
       
      </ul>
     </nav>
    );
  }
}
export default Navbar;
