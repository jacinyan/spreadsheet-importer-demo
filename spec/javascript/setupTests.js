import 'jest-canvas-mock';
import '@testing-library/jest-dom/extend-expect';

import { server } from '../../mocks/server.js';
// Establish API mocking before all tests.
beforeAll(() =>
  server.listen({
    warnOnUncaptured: true,
  })
);

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
