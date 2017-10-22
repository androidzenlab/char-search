import { expect } from '../test_helper';
import OrganisationReducer from '../../src/reducers/reducer_organisation';
import { FETCH_ORGANISATIONS, FETCH_ALL_COMPANY } from '../../src/actions/types';

describe('Organisation Reducer', () => {
  it('handles action with unknown type', () => {
    const action = { type: null, payload: {data: []} };
    expect(OrganisationReducer(undefined, action)).to.eql({});
  });

  it('handles action of type FETCH_ORGANISATIONS', () => {
    const action = { type: FETCH_ORGANISATIONS, payload: {data: { d: ['data']}} };
    expect(OrganisationReducer({}, action)).to.eql(['data']);
  });

  it('handles action of type FETCH_ALL_COMPANY', () => {
    const action = { type: FETCH_ALL_COMPANY, payload: 'data' };
    expect(OrganisationReducer({}, action)).to.eql('data');
  });
});
