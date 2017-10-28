import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import OrgListItem from "./org_list_item";







class OrganisationList extends Component {


    renderOrganisations() {
        if (this.props.organisations.length > 0) {
            let list = this.props.organisations.map(org => {
                if (org.statusCode === null || org.statusCode === 500) {
                    return (
                        <div></div>
                    );
                } else {
                    return (
                        <OrgListItem
                            org={org}
                            key={org.OrganisationId}
                        />
                    );
                }
            });
            return list;
        }
    };

    render() {
        // console.log('props is:', this.props);
        if (this.props.organisations.length > 0) {

            return (
                <div className="org-list">
                    <ul className="list-group">{this.renderOrganisations()}</ul>
                </div>
            );
        } else {
            return (
                <div className="org-list">
                    <p>Loading...</p>
                </div>
            );
        }
    }

}

OrganisationList.propTypes = {
    organisations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
};

function mapStateToProps({ organisations }) {
    return { organisations };
}

export default connect(mapStateToProps)(OrganisationList)