import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header';

// Use 'describe' to group together similar tests
describe('Header', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('shows a navbar', () => {
    expect(component).to.have.class('navbar');
  });
});
