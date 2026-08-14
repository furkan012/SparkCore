// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SparkCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SparkCore/i);
    expect(titleElement).toBeInTheDocument();
});
