import axios from "axios";

export const FETCH_ORGANISATIONS = "fetch_organisations";
export const FETCH_ORGANISATION = "fetch_organisation";

const ROOT_URL = "http://www.odata.charities.govt.nz/Organisations?$format=json"

export function fetchOrganisation() {
    const request = axios.get(`${ROOT_URL}`);

    return {
        type: FETCH_ORGANISATIONS,
        payload: request
    }
}