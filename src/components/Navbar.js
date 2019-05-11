import React, {Component} from 'react';
import logo from '../img/logo.png'; 

class Navbar extends Component{
    openMenu = () => {
        var nav = document.getElementById("mainNav");

        if(nav.classList.contains("mobiles-display-none")){
             nav.classList.remove("mobiles-display-none");
        }else{
            nav.classList.add("mobiles-display-none");
        }
    }
    render(){
        return(
            <div className="bar">
                <div className="container clearfix">
                    <div className="logo">
                        <img src={logo} alt="ClickBus"></img>
                    </div>
                    <div className="mobile-menu" onClick={this.openMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav id="mainNav" className="main-nav clearfix mobiles-display-none">
                        <a href="https://www.facebook.com/acostaninefour" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.linkedin.com/in/aldoacosta94/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/acosta94/" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </nav>
                </div>
               
            </div>
        )
    }
}

export default Navbar;