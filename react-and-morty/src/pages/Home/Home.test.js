import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';


test('location is on the screen', () => {
  render(<Home />, {wrapper:BrowserRouter});

const locationBtn = screen.getByText(/Locations/);
expect(locationBtn).toBeInTheDocument();

});

test('link is working', async () => {
    render(<Home />, {wrapper:BrowserRouter});

const characterLink = await screen.findByText(/Characters/);
fireEvent.click(characterLink);
expect(window.location.pathname).toMatch(/characters/)
 
});

test('logo must have alt = "logo"', () => {
    render(<Home/>, {wrapper:BrowserRouter});
    
const logo = screen.getByRole('img');
expect(logo).toHaveAttribute('alt', 'logo')
 
});


