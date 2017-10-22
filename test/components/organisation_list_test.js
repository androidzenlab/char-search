import { renderComponent, expect } from '../test_helper';
import OrganisationList from '../../src/components/organisation_list';

// Use 'describe' to group together similar tests
describe('OrganisationList', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(OrganisationList);
  });

  it('shows a organisation list', () => {
    expect(component).to.have.class('org-list');
  });
});
