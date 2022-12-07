import { render, fireEvent, screen } from '@testing-library/react'
import LocationsPage from "./locationsPage"
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'


test('Back to home button is on the page', async () => {
    render(
        <BrowserRouter initialEntries={'/locations'}>
            <LocationsPage />
        </BrowserRouter>
    )

    const backHomeButton = await screen.findAllByText(/Back To Home/)
    expect(backHomeButton).toHaveLength(1)

})

test('The title is on the page', async () => {
    render(
        <BrowserRouter initialEntries={'/locations'}>
            <LocationsPage />
        </BrowserRouter>
    )

    const title = await screen.findAllByText(/Locations/)
    expect(title).toHaveLength(1)

})

test('Cards are displayed', async () => {
    render(
        <BrowserRouter initialEntries={'/locations'}>
            <LocationsPage />
        </BrowserRouter>
    )

    const cards = await screen.findAllByText(/Type: /)
    expect(cards).toHaveLength(20);

})

/*test('details displayed', async () => {
    render(
        <BrowserRouter initialEntries={'/locations'}>
            <LocationsPage />
        </BrowserRouter>
    )

    const cards = await screen.findAllByText(/Type: /)
    cards.map(item => userEvent.click(item))
    const details = cards.getElementByClassName("planetDetails");
    expect(details).toBeInTheDocument()

})*/
