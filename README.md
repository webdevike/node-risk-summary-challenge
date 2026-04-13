# Node.js Coding Challenge — Basic Data Manipulation (30 minutes)

## Goal
Implement a small Node.js endpoint that summarizes event data using core JavaScript (arrays/objects/maps).

## Timebox
30 minutes total.

## Setup
```bash
npm install
npm start
```

Server runs at `http://localhost:3000`.

## Where to code
- Implement only: `buildRiskSummary(events)` in `src/utils.js`
- Look for the **`START HERE 👇`** section in that file
- Endpoint is already wired: `GET /risk-summary` in `src/server.js`

---

## Checkpoints (clear expectations)

### Checkpoint 1 (0–10 min)
Return one row per UTC date (`YYYY-MM-DD`) with:
- `event_date`
- `total_events`

### Checkpoint 2 (10–20 min) **Pass Criteria**
Add:
- `failed_logins` where `event_type === "login_fail"`

Also:
- Sort by `event_date` ascending

### Checkpoint 3 (20–30 min) **Bonus**
Add:
- `high_risk_events` where `risk_score >= 80`
- Treat `risk_score: null` as `0`

---

## Output shape
After Checkpoint 2:
```json
[
  {
    "event_date": "YYYY-MM-DD",
    "total_events": 0,
    "failed_logins": 0
  }
]
```

After Checkpoint 3 (bonus):
```json
[
  {
    "event_date": "YYYY-MM-DD",
    "total_events": 0,
    "failed_logins": 0,
    "high_risk_events": 0
  }
]
```

## Data
Input file: `events.json`

## Validation
Run anytime during the exercise:
```bash
curl http://localhost:3000/risk-summary
```

## Notes
- Use plain JavaScript (Node 18+)
- No database needed
- Keep code readable and simple
- Focus on correctness of grouping/count logic

## What we evaluate
- JavaScript fundamentals (loops/arrays/maps/objects)
- Correctness at each checkpoint
- Clean, understandable code
