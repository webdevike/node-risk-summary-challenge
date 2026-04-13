# Node.js Coding Challenge — Risk Summary API (30 minutes)

## Goal
Implement a small Node.js API endpoint that transforms event data into daily risk metrics.

## Timebox
30 minutes.

## Setup
```bash
npm install
npm start
```

Server runs at `http://localhost:3000`.

## Your Task
Implement the TODO functions in `src/utils.js`:

1. `dedupeLatestByEventId(events)`
   - Deduplicate by `event_id`
   - Keep only the row with the latest `event_ts`

2. `buildRiskSummary(events)`
   - Treat `risk_score: null` as `0`
   - Group by UTC date (`YYYY-MM-DD`) derived from `event_ts`
   - Compute:
     - `event_date`
     - `total_events`
     - `failed_logins` (`event_type === "login_fail"`)
     - `high_risk_events` (`risk_score >= 80`)
     - `high_risk_rate` = `high_risk_events / total_events` (rounded to 4 decimals)
   - Return top 3 dates by `high_risk_rate` descending
   - Tie-break deterministically by `event_date` ascending

The endpoint `GET /risk-summary` in `src/server.js` already calls your functions.

## Data
Input file: `events.json`

## Validation
After implementing, run:
```bash
curl http://localhost:3000/risk-summary
```

You should return a JSON array with 3 records in sorted order.

## Notes
- Use plain JavaScript (Node 18+)
- No database needed
- Keep code readable and modular
- Handle malformed data gracefully where reasonable

## What we evaluate
- Correctness of transformation logic
- JavaScript fundamentals (arrays, maps, objects, sorting)
- API endpoint behavior
- Code clarity and maintainability
