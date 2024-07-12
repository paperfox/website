import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

test('loads and shows deck', () => {
  render(<App />);

  const deck = screen.findByLabelText('Draw card from Tarot Deck');
  expect(deck).toBeTruthy();
});

// About Tab

test('select and view about page', async () => {
  render(<App />);

  user.click(await screen.findByRole('tab', {name: 'About', selected: false }));
  const aboutTabClicked = await screen.findByRole('tab', {name: 'About', selected: true });

  expect(aboutTabClicked).toBeTruthy();
});

