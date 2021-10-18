import * as React from 'react';
import { render, screen } from '../test-utils';
import userEvent from '@testing-library/user-event';

import Home from '../../../app/javascript/packs/pages/Home.jsx';

describe('Home Rendering', () => {
  describe.skip('Home mounts', () => {
    it('renders an upload input, a search bar and three records ', async () => {
      const { container } = render(<Home />);
      // can't figure out how to select the el
      const input = container.getElementsByClassName('MuiInput-input')[0];
      expect(input).toBeInTheDocument();

      const searchbar = screen.getByPlaceholderText(/search/gi);
      expect(searchbar).toBeInTheDocument();

      const rows = await screen.findAllByRole('row');
      expect(rows).toHaveLength(3);
    });
  });

  describe.skip('User uploads files and Home rerenders', () => {});
});
