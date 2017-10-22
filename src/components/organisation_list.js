import React from 'react';
import { connect } from 'react-redux';

const OrganisationList = (props) => {
    console.log('props is:', props);
    if (props.organisations.length > 0) {
        // return <p>{props.organisations.OrganisationId}</p>
        const list = props.organisations.map(org => <li key={org.OrganisationId}>{org.Name} Number is: {org.CompaniesOfficeNumber}
             Status code is: {org.statusCode}
        </li>);
        
            return (
                <div className="org-list">
                <ul className="list">{list}</ul>
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

function mapStateToProps({ organisations }) {
    return { organisations };
}

export default connect(mapStateToProps)(OrganisationList)