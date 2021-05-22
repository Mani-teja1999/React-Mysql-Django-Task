import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-info navbar-expand-lg">
          <Link to="/" className="navbar-brand">User Details App</Link>

          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">

          <li className="navbar-item">
          <Link to="/" className="nav-link text-dark">Current Users</Link>
          </li>
          <li className="navbar-item">

          <Link to="/create" className="nav-link text-dark">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
