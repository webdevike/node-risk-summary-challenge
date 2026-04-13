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

## Live Checkpoints (incremental)
Work in `src/utils.js` and progress through checkpoints.

### Checkpoint 1 (core)
Implement `buildRiskSummary(events)` to return one row per UTC date (`YYYY-MM-DD`) with:
- `event_date`
- `total_events`

### Checkpoint 2
Add:
- `failed_logins` (`event_type === "login_fail"`)
- `high_risk_events` (`risk_score >= 80`, with `null` treated as `0`)

### Checkpoint 3
Add:
- `high_risk_rate = high_risk_events / total_events` rounded to 4 decimals

### Checkpoint 4 (stretch)
- Sort by `high_risk_rate` descending
- Tie-break by `event_date` ascending
- Return top 3 rows
- (Optional stretch) Implement `dedupeLatestByEventId(events)` by `event_id` keeping latest `event_ts`

> Note: `dedupeLatestByEventId` currently returns input unchanged so early checkpoints can run.

## Endpoint
`GET /risk-summary` is already wired in `src/server.js`.

## Data
Input file: `events.json`

## Validation
After each checkpoint, run:
```bash
curl http://localhost:3000/risk-summary
```

## Notes
- Use plain JavaScript (Node 18+)
- No database needed
- Keep code readable and modular
- Prioritize correctness and clear reasoning over perfect edge-case handling

## What we evaluate
- JavaScript fundamentals (arrays, maps, objects, sorting)
- Correctness at each checkpoint
- Ability to explain approach and tradeoffs
- Code clarity
