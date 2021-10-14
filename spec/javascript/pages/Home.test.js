import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { shallow, mount, ReactWrapper } from 'enzyme';

import Home from '../../../app/javascript/packs/pages/Home.jsx';

/**
 * Factory function to create a ReactWrapper for the Home component's remounting
 * @function setup
 * @returns {ReactWrapper}
 */
const setup = () => {
  const queryClient = new QueryClient();
  return mount(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe('Home Rendering', () => {
  // TODO: centralize setup

  it('renders input ', () => {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, 'component-the-input');

    expect(input).toHaveLength(1);
  });

  it('renders ', () => {});

  it('renders ', () => {});
});
