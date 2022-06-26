import App from '@src/App';
import { render, fireEvent } from '@testing-library/react';
import mockLocalStoarge from 'lib/jest/mock/localStorage';

describe('useMode Hook', () => {
  it('localStorage', () => {
    mockLocalStoarge();
    window.localStorage.setItem('themeMode', 'DARK');
    const { getByRole } = render(<App />);
    const button = getByRole('switch');
    expect(window.localStorage.getItem('themeMode')).toBe('DARK');
    fireEvent.click(button);
    expect(window.localStorage.getItem('themeMode')).toBe('LIGHT');
  });
});
