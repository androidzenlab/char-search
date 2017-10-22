import React, { Component } from 'react';
import OrganisationList from './organisation_list';
import Header from './header';
import { fetchOrganisations } from "../actions";
import { connect } from "react-redux";


// export default class App extends Component {
class App extends Component {

    componentWillMount() {
        this.props.fetchOrganisations();
    }

    render() {
        return (
            <div className="comment-box">
                <Header />
                <OrganisationList />
            </div>
        );
    }
}

export default connect(null, { fetchOrganisations })(App);