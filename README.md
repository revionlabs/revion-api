# Revion API

Minimal backend services for Revion OS.  
This service handles authentication, data storage, and environment lookups through a privacy-preserving weather proxy.

## Endpoints
- `GET /income` — income records
- `POST /income` — create new record
- `GET /habits` — list habits
- `POST /notes` — store notes
- `GET /weather` — weather + AQI (proxy only)

## Goals
- Extremely thin server layer
- No heavy computation (handled in client / core)
- No third-party identity integrations
- Zero financial logic
