#!/bin/sh
set -e

echo "[entrypoint] Working directory: $(pwd)"

# If dependencies are missing (fresh named volume) install them deterministically.
if [ ! -f node_modules/astro/package.json ]; then
  echo "[entrypoint] Dependencies missing. Installing..."
  if [ -f package-lock.json ]; then
    echo "[entrypoint] Using lockfile -> npm ci"
    npm ci
  else
    echo "[entrypoint] No lockfile found -> npm install (please commit package-lock.json)"
    npm install
  fi
else
  # Detect drift for key deps (e.g. jspdf) and reinstall if absent
  if [ ! -d node_modules/jspdf ]; then
    echo "[entrypoint] Detected missing dependency 'jspdf' -> running npm ci to reconcile"
    if [ -f package-lock.json ]; then
      npm ci
    else
      npm install
    fi
  else
    echo "[entrypoint] Dependencies already present. Skipping install."
  fi
fi

echo "[entrypoint] Launching: $@"
exec "$@"
