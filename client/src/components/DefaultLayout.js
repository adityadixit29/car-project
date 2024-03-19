import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
         
          href="/admin"
        >
          Admin
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'slateblue'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <section id="home" class="welcome-hero">


<div class="top-area">
  <div class="header-area">
    
      <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

          <div class="container">

              
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                      <i class="fa fa-bars"></i>
                  </button>
                  <a class="navbar-brand" href="index.html"><Link to='/' style={{color:'slateblue'}}>Car Rental</Link><span></span></a>

              </div>
              

                          <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                  <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                      <li class=" scroll active"><a href="#home">home</a></li>
                      <li class="scroll"><a href="#service">service</a></li>
                      <li class="scroll"><a href="#featured-cars">featured cars</a></li>
                      <li class="scroll"><a href="#new-cars">new cars</a></li>
                      <li class="scroll"><a href="#brand">brands</a></li>
                      <li class="scroll"><a href="#home">
                        <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{user.username}</Button>
          </Dropdown>
          </a>
          </li>
                  </ul>
              </div>
          </div>
      </nav>
      
  </div>
    <div class="clearfix"></div>

</div>


<div class="container">
  <div class="welcome-hero-txt">
    <h2>get your desired car in resonable price</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua. 
    </p>
    <button class="welcome-btn" onclick="window.location.href='#'">contact us</button>
  </div>
</div>



</section>
     
      <div className="content">{props.children}</div>

      
          
      </div>
    
  );
}

export default DefaultLayout;
