const fs = require('fs');
const path = require('path');

function loadEvents() {
  const filePath = path.join(__dirname, '..', 'events.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

/**
 * Not part of this version of the challenge.
 * Kept for compatibility with older interviewer notes.
 *
 * @param {Array<Object>} events
 * @returns {Array<Object>}
 */
function dedupeLatestByEventId(events) {
  return events;
}

/**
 * Core task (basic JavaScript data manipulation):
 *
 * 1) Group events by UTC date (YYYY-MM-DD)
 * 2) Return one row per day with:
 *    - event_date
 *    - total_events
 *    - failed_logins (event_type === 'login_fail')
 * 3) Sort by event_date ascending
 *
 * Optional bonus:
 * - Add high_risk_events where risk_score >= 80 (treat null as 0)
 *
 * @param {Array<Object>} events
 * @returns {Array<Object>}
 */
function buildRiskSummary(events) {
  throw new Error('Not implemented: buildRiskSummary');
}

module.exports = {
  loadEvents,
  dedupeLatestByEventId,
  buildRiskSummary,
};
