import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    findCompany() {
        console.log('start finding company...')
    }

    render() {
        return (
          <nav className="navbar navbar-light">
            <button onClick={this.findCompany.bind(this)} className="btn btn-primary">Find charity with company</button>
          </nav>
        );
      }
}

export default connect()(Header);