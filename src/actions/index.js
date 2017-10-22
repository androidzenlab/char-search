import axios from "axios";

export const FETCH_ORGANISATIONS = "fetch_organisations";
export const FETCH_ORGANISATION = "fetch_organisation";
export const FETCH_COMPANY = "fetch_company";
export const FETCH_ALL_COMPANY = "fetch_all_company";

const ROOT_URL = "http://www.odata.charities.govt.nz/Organisations?$format=json";

const COMPANY_OFFICE_URL = "https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/";

export function fetchOrganisation() {
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
        // axios.get(`${ROOT_URL}`)
        //     .then(response => {
        //         dispatch({
        //             type: FETCH_ORGANISATIONS,
        //             payload: response
        //         });
        //     });


            // let tirmList = organisations.slice(0, 10);

            // const list = tirmList.map(org => {
            //     // if company office number exist, try to get the info
            //     if (org.CompaniesOfficeNumber) {
            //         const request = axios.get(`${COMPANY_OFFICE_URL}${org.CompaniesOfficeNumber}`)
            //             .then((response) => {
            //                 return { ...org, statusCode: response.status };
            //             })
            //             .catch(function (error) {
            //                 if (error.response) {
            //                     // console.log(error.response.data);
            //                     console.log('error status is:', error.response.status);
            //                     // console.log(error.response.headers);
            //                     return { ...org, statusCode: error.response.status };
            //                 }
            //             });
            //         return { ...org, statusCode: request.statusCode };
            //     } else {
            //         return { ...org, statusCode: null };
            //     }
        
            // });

            let tirmList = organisations.slice(0, 10);
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
                                // console.log(error.response.data);
                                console.log('error status is:', error.response.status);
                                // console.log(error.response.headers);
                                // return { ...org, statusCode: error.response.status };
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
                // payload: {organisations: { data: {d: list }}}


            // let tirmList = organisations.slice(0, 10);
            // let promises  = [];
            // let list = [];

            // tirmList.forEach(function(org){
            //     promises.push(axios.get(`${COMPANY_OFFICE_URL}${org.CompaniesOfficeNumber}`))
            //   });

            // axios.all(promises).then(function(results) {
            //     results.forEach(function(response) {
            //         list.push({ ...org, statusCode: response.status });
            //         // mainObject[response.identifier] = response.value;
            //     })
            // });
            

            

    }

    // const request = axios.get(`${COMPANY_OFFICE_URL}${companyNumber}`);


}

export function fetchCompany(companyNumber) {
    const request = axios.get(`${COMPANY_OFFICE_URL}${companyNumber}`);


    return {
        type: FETCH_COMPANY,
        payload: request
    }
}