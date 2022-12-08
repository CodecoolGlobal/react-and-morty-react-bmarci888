/* eslint-disable jest/no-mocks-import */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { useCharacters } from '../../api/useData';
import Characters from './Characters';
import { mockResponse } from './__mocks__/mockCharacktersResponse';

jest.mock('../../api/useData', () => ({
  useCharacters: jest.fn(),
}));

describe('<Characters />', () => {
  test('should render Charcters title', () => {
    useCharacters.mockImplementation(() => 'Loading...');
    render(
      <BrowserRouter>
        <Characters />
      </BrowserRouter>
    );
    const title = screen.getByText('Characters');
    expect(title.textContent).toBe('Characters');
  });

  test('should render loading', () => {
    useCharacters.mockImplementation(() => 'Loading...');
    render(
      <BrowserRouter>
        <Characters />
      </BrowserRouter>
    );
    const text = screen.getByText(/Loading/);
    expect(text).toBeInTheDocument();
  });

  test('should render cards', async () => {
    useCharacters.mockImplementation(() => mockResponse);
    render(
      <BrowserRouter>
        <Characters />
      </BrowserRouter>
    );
    const imageAlt = await screen.findByAltText(mockResponse.results[0].name);
    expect(imageAlt).toBeInTheDocument();
  });

  test('should navigate to Character page', async () => {
    useCharacters.mockImplementation(() => mockResponse);
    render(
      <BrowserRouter>
        <Characters />
      </BrowserRouter>
    );
    const imageAlt = await screen.findByAltText(mockResponse.results[0].name);
    userEvent.click(imageAlt);
    expect(window.location.pathname).toMatch(/characters\/1/);
  });
});
