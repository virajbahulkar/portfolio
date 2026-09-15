const test = require('node:test');
const assert = require('node:assert/strict');

const { createServer, resolvePort } = require('../src/server');

const startServer = async (options = {}) =>
  new Promise((resolve) => {
    const server = createServer(options);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolve({
        server,
        baseUrl: `http://127.0.0.1:${address.port}`,
      });
    });
  });

test('serves health and readiness probes', async () => {
  const { server, baseUrl } = await startServer({
    serviceName: 'test-platform-api',
    version: '1.2.3',
  });

  try {
    const healthResponse = await fetch(`${baseUrl}/healthz`);
    assert.equal(healthResponse.status, 200);
    assert.deepEqual(await healthResponse.json(), {
      service: 'test-platform-api',
      status: 'ok',
    });

    const readinessResponse = await fetch(`${baseUrl}/readyz`);
    assert.equal(readinessResponse.status, 200);
    assert.deepEqual(await readinessResponse.json(), {
      service: 'test-platform-api',
      status: 'ready',
    });
  } finally {
    server.close();
  }
});

test('exports prometheus-style metrics for observed routes', async () => {
  const { server, baseUrl } = await startServer({
    serviceName: 'metrics-platform-api',
  });

  try {
    await fetch(`${baseUrl}/healthz`);
    await fetch(`${baseUrl}/readyz`);

    const metricsResponse = await fetch(`${baseUrl}/metrics`);
    assert.equal(metricsResponse.status, 200);

    const payload = await metricsResponse.text();
    assert.match(payload, /platform_showcase_http_requests_total/);
    assert.match(
      payload,
      /service="metrics-platform-api",path="\/healthz",method="GET",status="200"} 1/
    );
    assert.match(
      payload,
      /platform_showcase_app_ready\{service="metrics-platform-api"\} 1/
    );
  } finally {
    server.close();
  }
});

test('returns a failing readiness probe when the dependency gate is down', async () => {
  const { server, baseUrl } = await startServer({
    serviceName: 'not-ready-api',
    isReady: () => false,
  });

  try {
    const response = await fetch(`${baseUrl}/readyz`);
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), {
      service: 'not-ready-api',
      status: 'not-ready',
    });
  } finally {
    server.close();
  }
});

test('falls back to the default port for invalid port values', () => {
  assert.equal(resolvePort(undefined), 8080);
  assert.equal(resolvePort('invalid'), 8080);
  assert.equal(resolvePort('-1'), 8080);
  assert.equal(resolvePort('3001'), 3001);
});
