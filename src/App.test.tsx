import { render, screen, within } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { initialInputData } from './consts';

describe('App', () => {
  test('renders chart list', () => {
    render(<App />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(initialInputData.length);
  });
  test('renders button', () => {
    render(<App />);
    const button = screen.getByText('Change Chart Data');
    expect(button).toBeInTheDocument();
  });
  test('renders title', () => {
    render(<App />);
    const title = screen.getByText('Spent time(seconds)');
    expect(title).toBeInTheDocument();
  });
});
