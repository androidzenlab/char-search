import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCompany } from "../actions";
// import { fetchOrganisation } from "../actions";
class Header extends Component {

    findCompany() {
        console.log('start finding company...')
        if (this.props.organisations.length > 0) {
          this.props.fetchAllCompany(this.props.organisations);
        }
    }

    render() {
        return (
          <nav className="navbar navbar-light bg-faded">
            <h1 className="navbar-brand mb-0">Charity search</h1>
            <button onClick={this.findCompany.bind(this)} className="nav-item btn btn-primary">Find charity with proper company</button>
          </nav>
        );
      }
}

function mapStateToProps({ organisations }) {
  return { organisations };
}

export default connect(mapStateToProps, {fetchAllCompany})(Header);


// this.props.fetchOrganisation();

// export default connect(null, { fetchOrganisation })(App);

