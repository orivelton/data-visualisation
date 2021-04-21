import { render } from '@testing-library/react';
import DataTable from '../components/DataTable';
import { dataMock } from '../helpers/mock/mockUnitTest';

test('Render DataTable component', () => {
  const { getByRole } = render(<DataTable data={dataMock}/>);

  expect(getByRole('columnheader', { name: /metric/i })).toBeInTheDocument();
  expect(getByRole('columnheader', { name: /value/i })).toBeInTheDocument();
  expect(getByRole('cell', { name: /tk1 underflow flow rate/i })).toBeInTheDocument();
});
