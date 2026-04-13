# Node.js Coding Challenge — Basic Data Manipulation (30 minutes)

## Goal
Implement a small Node.js endpoint that summarizes event data using core JavaScript (arrays/objects/maps).

## Timebox
30 minutes.

## Setup
```bash
npm install
npm start
```

Server runs at `http://localhost:3000`.

## Core Task (Pass Criteria)
Implement `buildRiskSummary(events)` in `src/utils.js`.

Return one row per UTC date (`YYYY-MM-DD`) with:
- `event_date`
- `total_events`
- `failed_logins` (`event_type === "login_fail"`)

Then sort output by `event_date` ascending.

## Optional Bonus (if time)
Add:
- `high_risk_events` where `risk_score >= 80` (treat `null` as `0`)

## Endpoint
`GET /risk-summary` is already wired in `src/server.js`.

## Data
Input file: `events.json`

## Validation
Run:
```bash
curl http://localhost:3000/risk-summary
```

## Notes
- Use plain JavaScript (Node 18+)
- No database needed
- Keep code readable and simple
- Focus on core data manipulation correctness

## What we evaluate
- JavaScript fundamentals (loops/arrays/maps/objects)
- Correct grouping/count logic
- Clean, understandable code
