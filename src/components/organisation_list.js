import React, { Component } from 'react';
import { connect } from 'react-redux';
import { COMPANY_OFFICE_URL } from "../actions"; 





  

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
                        <li className="list-group-item" key={org.OrganisationId}> 
                            <div className="row">
                            <div className="col">
                                {org.Name} 
                                </div>
                                <div className="col">
                        <a href={COMPANY_OFFICE_URL+org.CompaniesOfficeNumber} target="_blank">Get company information
            </a>
                        </div>
                            </div>
                        </li>
                      );
                  }
            });
            return list;
        }
      };

      render() {
    console.log('props is:', this.props);
    if (this.props.organisations.length > 0) {

        return (
            <div className="org-list">
                <ul className="list-group">{this.renderOrganisations()}</ul>
            </div>
        );

        // return <p>{props.organisations.OrganisationId}</p>
        // const list = this.props.organisations.map(org => <li key={org.OrganisationId}>{org.Name} Number is: {org.CompaniesOfficeNumber}
        //      Status code is: {org.statusCode}
        // </li>);
        
        //     return (
        //         <div className="org-list">
        //         <ul className="list">{list}</ul>
        //         </div>
        //     );
    } else {
        return (
            <div className="org-list">
            <p>Loading...</p>
            </div>
        );
    }
}

}

function mapStateToProps({ organisations }) {
    return { organisations };
}

export default connect(mapStateToProps)(OrganisationList)