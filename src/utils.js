const fs = require('fs');
const path = require('path');

function loadEvents() {
  const filePath = path.join(__dirname, '..', 'events.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

/**
 * Checkpoint 4 (stretch): deduplicate by event_id, keeping latest event_ts.
 *
 * Starter behavior returns events unchanged so earlier checkpoints can run.
 * Replace with real dedupe logic if you reach Checkpoint 4.
 *
 * @param {Array<Object>} events
 * @returns {Array<Object>}
 */
function dedupeLatestByEventId(events) {
  return events;
}

/**
 * Implement this incrementally using checkpoints:
 *
 * Checkpoint 1: group by event_date (UTC YYYY-MM-DD) and compute total_events.
 * Checkpoint 2: add failed_logins and high_risk_events (null risk_score => 0).
 * Checkpoint 3: add high_risk_rate rounded to 4 decimals.
 * Checkpoint 4 (stretch): sort by high_risk_rate desc, tie-break event_date asc, top 3.
 *
 * Output shape:
 * [
 *   {
 *     event_date: 'YYYY-MM-DD',
 *     total_events: number,
 *     failed_logins: number,
 *     high_risk_events: number,
 *     high_risk_rate: number
 *   }
 * ]
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
