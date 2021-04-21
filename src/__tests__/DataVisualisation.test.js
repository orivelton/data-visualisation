import { render } from '@testing-library/react';
import DataVisualisation from '../components/DataVisualisation';

test('Render DataVisualisation component', () => {
  const { getByRole, getByText } = render(<DataVisualisation />);
  expect(getByRole('heading', { name: /data visualisation/i })).toBeInTheDocument();
  expect(getByText(/current data/i)).toBeInTheDocument();
});
