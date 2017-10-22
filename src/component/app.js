import React, { Component }  from 'react';
import OrganisationList from './organisation_list';
import Header from './header';
import { fetchOrganisation } from "../actions";
import { connect } from "react-redux";


// export default class App extends Component {
class App extends Component {

    componentWillMount() {
        this.props.fetchOrganisation();
    }

    render() {
        return (
            <div>
                <Header />
                <OrganisationList />
            </div>
        );
    }
}

export default connect(null, { fetchOrganisation })(App);