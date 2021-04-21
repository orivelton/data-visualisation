import { request } from '../helpers/api';

test('Request function test', async () => {
  const { current } = await request();
  expect(current.data.TK1.message).toEqual('Prediction ok');
});