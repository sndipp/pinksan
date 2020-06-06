import React, { Component } from 'react';
import './App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
export default class Header extends Component {
    render() {
        return (
            <div >
            <Navbar collapseOnSelect expand="lg" className="shadow">
            <Navbar.Brand href="#home">ONLINE-TUTORIAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto ">
              <Nav.Link href="#live_consultation "><i class="fa fa-circle" aria-hidden="true" style={{color:'red'}}></i>Live Consultation</Nav.Link>
                <Nav.Link href="#View_plans" className="menu">View Plans</Nav.Link>
                <Nav.Link href="#Buy_plan" className="menu">Buy Plans</Nav.Link>
                
              </Nav>
              <Nav>
               
                <div>
                <Button size="lg" className="button" style={{backgroundColor:'#c471ed' }}>
                Log-In
              </Button></div>
               
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            </div>
        )
    }
}
 

