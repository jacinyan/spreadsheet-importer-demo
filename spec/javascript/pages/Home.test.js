import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { shallow, mount } from 'enzyme';

import Home from '../../../app/javascript/packs/pages/Home.jsx';

describe('Home Rendering', () => {
  // TODO: centralize setup
  const queryClient = new QueryClient();

  it('renders input ', () => {
    const wrapper = mount(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    const input = wrapper.find("[data-test='input-test']");
    console.log(input);
    expect(input).toHaveLength(1);
  });

  it('renders ', () => {});

  it('renders ', () => {});
});
