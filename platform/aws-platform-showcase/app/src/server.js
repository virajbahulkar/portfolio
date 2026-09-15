const http = require('node:http');
const { URL } = require('node:url');

const DEFAULT_PORT = 8080;

const json = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(payload));
};

const text = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    'content-type': 'text/plain; version=0.0.4; charset=utf-8',
  });
  res.end(payload);
};

const createLogger =
  (stream = process.stdout) =>
  (entry) => {
    stream.write(
      `${JSON.stringify({ timestamp: new Date().toISOString(), ...entry })}\n`
    );
  };

const createMetricsStore = () => ({
  startedAt: Date.now(),
  requestCounts: new Map(),
});

const recordRequest = (store, serviceName, path, method, statusCode) => {
  const key = `${serviceName}|${path}|${method}|${statusCode}`;
  store.requestCounts.set(key, (store.requestCounts.get(key) || 0) + 1);
};

const renderMetrics = (store, serviceName, ready) => {
  const lines = [
    '# HELP platform_showcase_http_requests_total Total HTTP requests handled by the platform showcase API.',
    '# TYPE platform_showcase_http_requests_total counter',
  ];

  [...store.requestCounts.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .forEach(([key, value]) => {
      const [service, path, method, statusCode] = key.split('|');
      lines.push(
        `platform_showcase_http_requests_total{service="${service}",path="${path}",method="${method}",status="${statusCode}"} ${value}`
      );
    });

  const uptimeSeconds = ((Date.now() - store.startedAt) / 1000).toFixed(2);

  lines.push(
    '# HELP platform_showcase_process_uptime_seconds Process uptime in seconds.',
    '# TYPE platform_showcase_process_uptime_seconds gauge',
    `platform_showcase_process_uptime_seconds{service="${serviceName}"} ${uptimeSeconds}`,
    '# HELP platform_showcase_app_ready Application readiness status.',
    '# TYPE platform_showcase_app_ready gauge',
    `platform_showcase_app_ready{service="${serviceName}"} ${ready ? 1 : 0}`
  );

  return `${lines.join('\n')}\n`;
};

const resolvePort = (value) => {
  const parsed = Number.parseInt(value || '', 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    return DEFAULT_PORT;
  }

  return parsed;
};

const createServer = (options = {}) => {
  const serviceName =
    options.serviceName || process.env.SERVICE_NAME || 'platform-showcase-api';
  const version = options.version || process.env.APP_VERSION || '0.1.0';
  const logger = options.logger || createLogger();
  const store = options.store || createMetricsStore();
  const isReady =
    options.isReady || (() => process.env.READINESS_FAIL !== 'true');

  return http.createServer((req, res) => {
    const baseUrl = `http://${req.headers.host || 'localhost'}`;
    const url = new URL(req.url || '/', baseUrl);
    const ready = isReady();

    const respond = (statusCode, body, responder = json) => {
      recordRequest(
        store,
        serviceName,
        url.pathname,
        req.method || 'GET',
        statusCode
      );
      logger({
        level: statusCode >= 500 ? 'error' : 'info',
        service: serviceName,
        path: url.pathname,
        method: req.method || 'GET',
        statusCode,
      });
      responder(res, statusCode, body);
    };

    if (url.pathname === '/') {
      respond(200, {
        service: serviceName,
        version,
        status: 'ok',
        endpoints: ['/healthz', '/readyz', '/metrics'],
      });
      return;
    }

    if (url.pathname === '/healthz') {
      respond(200, { service: serviceName, status: 'ok' });
      return;
    }

    if (url.pathname === '/readyz') {
      respond(ready ? 200 : 503, {
        service: serviceName,
        status: ready ? 'ready' : 'not-ready',
      });
      return;
    }

    if (url.pathname === '/metrics') {
      const payload = renderMetrics(store, serviceName, ready);
      respond(200, payload, text);
      return;
    }

    respond(404, { error: 'Not Found' });
  });
};

if (require.main === module) {
  const port = resolvePort(process.env.PORT);
  const server = createServer();

  server.listen(port, () => {
    const logger = createLogger();
    logger({
      level: 'info',
      service: process.env.SERVICE_NAME || 'platform-showcase-api',
      message: 'server.started',
      port,
    });
  });
}

module.exports = {
  createLogger,
  createMetricsStore,
  createServer,
  renderMetrics,
  resolvePort,
};
