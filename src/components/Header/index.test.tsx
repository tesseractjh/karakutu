import App from '@src/App';
import { render, fireEvent } from '@testing-library/react';

jest.mock('nanoid', () => {
  let count = 0;
  return { nanoid: () => count++ };
});

describe('Dark Mode Button', () => {
  it('localStorage', () => {
    window.localStorage.setItem('themeMode', 'DARK');
    const { getByRole } = render(<App />);
    const button = getByRole('switch');
    expect(window.localStorage.getItem('themeMode')).toBe('DARK');
    fireEvent.click(button);
    expect(window.localStorage.getItem('themeMode')).toBe('LIGHT');
  });
});
