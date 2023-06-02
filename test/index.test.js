import axios from 'axios';

describe('test example', () => {
  test('success get response from /test endpoint', async () => {
    const response = await axios.get('http://localhost:3000/test');
    expect(response.status).toBe(200);
    expect(response.data).toBe('ok');
  });

  test('failed get response from /test endpoint', async () => {
    try {
      await axios.post('http://localhost:3000/test');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
