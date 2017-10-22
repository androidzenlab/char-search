import axios from "axios";
import { FETCH_ORGANISATIONS, FETCH_ALL_COMPANY } from './types';

const ROOT_URL = "http://www.odata.charities.govt.nz/Organisations?$format=json";

export const COMPANY_OFFICE_URL = "https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/";

export function fetchOrganisations() {
    return function (dispatch) {
        axios.get(`${ROOT_URL}`)
            .then(response => {
                dispatch({
                    type: FETCH_ORGANISATIONS,
                    payload: response
                });
            });
    }
}

export function fetchAllCompany(organisations) {
    return function (dispatch) {
            let tirmList = organisations.slice(0, 100);
            let list = [];
            let promises  = [];

            tirmList.forEach(org => {
                if (org.CompaniesOfficeNumber) {
                    promises.push(
                        axios.get(`${COMPANY_OFFICE_URL}${org.CompaniesOfficeNumber}`)
                        .then((response) => {
                            // return { ...org, statusCode: response.status };
                            list.push({ ...org, statusCode: response.status });
                        })
                        .catch(function (error) {
                            if (error.response) {
                                // console.log('error status is:', error.response.status);
                                list.push({ ...org, statusCode: error.response.status });
                            }
                        })
                    );
                    // return { ...org, statusCode: request.statusCode };
                } else {
                    list.push({ ...org, statusCode: null });
                    // return { ...org, statusCode: null };
                }
            });
        
            axios.all(promises).then(function(results) {
                dispatch({
                    type: FETCH_ALL_COMPANY,
                    payload: list
                })
            }
            );                    

    }

}
