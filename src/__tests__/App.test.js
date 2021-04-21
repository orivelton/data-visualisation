import { render } from '@testing-library/react';
import App from '../App';

test('Render App component', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('heading', { name: /data visualisation/i })).toBeInTheDocument();
});
