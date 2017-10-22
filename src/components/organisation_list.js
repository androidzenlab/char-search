import React from 'react';
import { connect } from 'react-redux';

const OrganisationList = (props) => {
    console.log('props is:', props);
    if (props.organisations.data) {
        // return <p>{props.organisations.OrganisationId}</p>
        const list = props.organisations.data.d.map(org => <li key={org.OrganisationId}>{org.Name}</li>);
        
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