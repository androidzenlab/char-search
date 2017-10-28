import React from "react";
import { COMPANY_OFFICE_URL } from "../actions";

class OrgListItem extends React.Component {
  //   const imageUrl = video.snippet.thumbnails.default.url;
  state = { showDetails: false };



  // console.log('on org select...', org)
  render() {
    const { showDetails } = this.state;
    const { org } = this.props;
    return (
      <li  className="list-group-item" key={org.OrganisationId}>
        
        <div  className="row" >
          
          <a  href="#" className="collapsed col" onClick={() => this.setState({ showDetails: !showDetails })}>
            {org.Name}
          </a>
  
          <div className="col">
            <a href={COMPANY_OFFICE_URL + org.CompaniesOfficeNumber} target="_blank" >Get company information</a>
          </div>
          
          </div>
          {showDetails && (
            <div className="card card-block">
              <p>Charity Registration Number: {org.CharityRegistrationNumber}</p>
              <p>Go to web site: <a href={org.WebSiteURL} target="_blank">{org.WebSiteURL}on</a></p>
              <p>Charity Registration Number: {org.EMailAddress1}</p>
              <p>Charity Email Address: {org.CharityEmailAddress}</p>
              <p>Companies office Number: {org.CompaniesOfficeNumber}</p>
              <p>Date Registered: {org.DateRegistered}</p>
            </div>)
          }
  
        
      </li>
    );
  }

};



export default OrgListItem;
