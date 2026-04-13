const fs = require('fs');
const path = require('path');

function loadEvents() {
  const filePath = path.join(__dirname, '..', 'events.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

/**
 * START HERE 👇
 *
 * Build and return a daily summary from the events array.
 *
 * Pass criteria (Checkpoint 1 + 2):
 * - Group by UTC date (YYYY-MM-DD) from event_ts
 * - Return one row per date with:
 *   - event_date
 *   - total_events
 *   - failed_logins (event_type === 'login_fail')
 * - Sort rows by event_date ascending
 *
 * Bonus (Checkpoint 3):
 * - Add high_risk_events where risk_score >= 80
 * - Treat risk_score: null as 0
 *
 * @param {Array<Object>} events
 * @returns {Array<Object>}
 */
function buildRiskSummary(events) {
  // 1) Create a map/object keyed by date.

  // 2) Loop through events and increment counts per day.

  // 3) Convert grouped results to an array.

  // 4) Sort by event_date ascending.

  // 5) Return the final array.

  throw new Error('Not implemented: buildRiskSummary');
}

module.exports = {
  loadEvents,
  buildRiskSummary,
};
