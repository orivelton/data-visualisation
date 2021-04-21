import { render } from '@testing-library/react';
import LineChart from '../components/LineChart';
import { dataMock } from '../helpers/mock/mockUnitTest';

test('Render LineChart component', () => {
  const { getByText } = render(<LineChart data={dataMock}/>);
  expect(getByText(/loading data visualisation/i)).toBeInTheDocument();
});
