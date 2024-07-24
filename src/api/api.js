const BE_URL = 'http://localhost:3000';

export async function getData(path) {
  return makeRequest(path);
}

export async function postData(path, body) {
  return makeRequest(path, body, 'POST');
}

async function makeRequest(path, body, method = 'GET') {
  try {
    const response = await fetch(BE_URL + path, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    return response;
  } catch (error) {
    console.error(error.message);
  }
}
