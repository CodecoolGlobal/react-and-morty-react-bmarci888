/* eslint-disable jest/no-mocks-import */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { useLocations } from '../../api/useData';
import LocationsPage from './Locations';
import { mockResponse } from './__mocks__/mockLocationsResponse';

jest.mock('../../api/useData', () => ({
  useLocations: jest.fn(),
}));

describe('<LocationsPage />', () => {
  test('should render Locations Page title', () => {
    useLocations.mockImplementation(() => 'Loading...');
    render(
      <BrowserRouter>
        <LocationsPage />
      </BrowserRouter>
    );
    const title = screen.getByText('Locations');
    expect(title.textContent).toBe('Locations');
  });

  test('should render loading', () => {
    useLocations.mockImplementation(() => 'Loading...');
    render(
      <BrowserRouter>
        <LocationsPage />
      </BrowserRouter>
    );
    const text = screen.getByText(/Loading/);
    expect(text).toBeInTheDocument();
  });

  test('should render cards', async () => {
    useLocations.mockImplementation(() => mockResponse);
    render(
      <BrowserRouter>
        <LocationsPage />
      </BrowserRouter>
    );
    const name = await screen.findByText(/Earth/);
    expect(name).toBeInTheDocument();
  });

  test('should navigate to Location details page', async () => {
    useLocations.mockImplementation(() => mockResponse);
    render(
      <BrowserRouter>
        <LocationsPage
          page={1}
          setPage={jest.fn(() => 2)}
          planetNumber={1}
          setPlanetNumber={jest.fn()}
        />
      </BrowserRouter>
    );
    const name = await screen.findByText(/Earth/);
    userEvent.click(name);
    expect(window.location.pathname).toMatch(/locations\/1/);
  });
});
