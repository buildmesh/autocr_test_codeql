# autocr_test_codeql

Synthetic CodeQL fixtures for Autocr Stage 2 worker validation.

This repository intentionally contains vulnerable-looking source code. The
fixtures are designed for static-analysis testing only and must not be deployed
or used as application examples.

## Scope

The initial fixture set targets the CodeQL queries currently enabled by Autocr:

- `py/command-line-injection`
- `js/command-line-injection`

Each language includes:

- one intentionally vulnerable command-injection fixture
- one benign control fixture that uses allowlisted commands or argument arrays

## Public Safety

- No real credentials, tokens, endpoints, or customer data are included.
- No GitHub Actions workflows are included, so publishing this repo will not
  execute fixture code automatically.
- The vulnerable files are intentionally small and synthetic to keep analyzer
  output deterministic.

## Expected Use

Run Autocr against this repository with CodeQL enabled and with the CodeQL
license acknowledgement configured in the Autocr controller environment or
configuration.
