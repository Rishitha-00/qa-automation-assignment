
import { test, expect } from '@playwright/test';

const apiKey = process.env.REQRES_API_KEY;

test.describe('ReqRes user API', () => {
  test('GET user returns status 200 and an email', async ({ request }) => {
    expect(apiKey, 'Set REQRES_API_KEY before running tests')
      .toBeTruthy();

    const response = await request.get(
      'https://reqres.in/api/users/2',
      {
        headers: { 'x-api-key': apiKey! },
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.email).toBeTruthy();
  });

  test('POST creates a user successfully', async ({ request }) => {
    expect(apiKey, 'Set REQRES_API_KEY before running tests')
      .toBeTruthy();

    const response = await request.post(
      'https://reqres.in/api/users',
      {
        headers: { 'x-api-key': apiKey! },
        data: {
          name: 'morpheus',
          job: 'leader',
        },
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('morpheus');
  });
});
