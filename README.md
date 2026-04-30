# autocr_test_codeql

Synthetic CodeQL fixtures for Autocr Stage 2 worker validation.

This repository intentionally contains vulnerable-looking source code. The
fixtures are designed for static-analysis testing only and must not be deployed
or used as application examples.

## Scope

The fixture set targets the CodeQL queries currently enabled by Autocr:

- `py/command-line-injection`
- `py/code-injection`
- `py/unsafe-deserialization`
- `py/template-injection`
- `py/full-ssrf`
- `py/path-injection`
- `py/sql-injection`
- `py/regex-injection`
- `py/log-injection`
- `js/command-line-injection`
- `js/code-injection`
- `js/unsafe-deserialization`
- `js/path-injection`
- `js/request-forgery`
- `js/client-side-request-forgery`
- `js/log-injection`
- `js/unsafe-code-construction`

## Fixture Matrix

Each CodeQL check has four fixture cases:

- `malicious`: direct vulnerable source-to-sink flow.
- `malicious_edge`: intentionally vulnerable flow through a helper, transform,
  header, form value, or other less-direct path.
- `benign`: straightforward safe pattern using parameterization, allowlists,
  safe APIs, or static targets.
- `benign_edge`: safe pattern that still resembles the vulnerability shape,
  such as allowlisted dispatch, same-origin checks, escaping, or containment
  validation.

The expanded matrix lives under:

- `python/codeql/<check>/`
- `javascript/codeql/<check>/`

The original top-level command-injection fixtures remain for simple smoke
tests and backwards-compatible manual runs.

## Public Safety

- No real credentials, tokens, endpoints, or customer data are included.
- No GitHub Actions workflows are included, so publishing this repo will not
  execute fixture code automatically.
- The vulnerable files are intentionally small and synthetic to keep analyzer
  output deterministic.
- External hostnames use reserved `.invalid` names where examples need a URL.

## Expected Use

Run Autocr against this repository with CodeQL enabled and with the CodeQL
license acknowledgement configured in the Autocr controller environment or
configuration.
