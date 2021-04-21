import { adapter } from '../helpers/helper';
import response from '../helpers/mock/mockUnitTest.json'

test('Helper function test', () => {
  expect(adapter(response)[0].name).toEqual('TK1_Underflow_Flow_Rate')
  expect(adapter(response)[1].name).toEqual('TK1_Underflow_Percent_Solids')
});