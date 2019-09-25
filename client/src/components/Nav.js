import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="nav">   
                <NavLink className="nav-item" 
                    activeClassName="nav-item-active" exact to="/"
                >Home</NavLink>
                <NavLink className="nav-item" 
                    activeClassName="nav-item-active" exact to="/list"
                >List of Url</NavLink>
            </nav>
        );
    }
}

export default Nav;