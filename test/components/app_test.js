import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('has a header', () => {
    console.log('app is:', component);
    expect(component.find('.navbar')).to.exist;
  });

  it('shows a organisation list', () => {
    expect(component.find('.org-list')).to.exist;
  });
});
