import * as React from 'react';
import { render, screen, waitFor } from '../test-utils';
import userEvent from '@testing-library/user-event';
// import { fireEvent } from '@testing-library/dom';

import Home from '../../../app/javascript/packs/pages/Home.jsx';

describe('Home Rendering', () => {
  describe.skip('Home mounts', () => {
    it('renders an upload input, a search bar and three records ', async () => {
      // TODO: investigation into the implementation of upload input/button, can be wrong
      const { container } = render(<Home />);
      const input = container.getElementsByClassName('MuiInput-input')[0];
      expect(input).toBeInTheDocument();

      const searchbar = screen.getByPlaceholderText(/search/gi);
      expect(searchbar).toBeInTheDocument();

      const rows = await screen.findAllByRole('row');
      expect(rows).toHaveLength(3);
    });
  });

  describe('User uploads files and Home rerenders', () => {
    test('can select a xlxs file and upload will make a request', async () => {
      const { container, getByText } = render(<Home />);

      const file = new File(['fake content'], 'sample-data.xlsx', {
        type: 'application/vnd.ms-excel',
      });

      const input = container.getElementsByClassName('MuiInput-input')[0];
      userEvent.upload(input, file);

      expect(input.files[0]).toStrictEqual(file);
      expect(input.files.item(0)).toStrictEqual(file);
      expect(input.files).toHaveLength(1);

      // TODO: mock POST request in msw handlers
    });
  });
});
