const fs = require('fs');
const path = require('path');

function loadEvents() {
  const filePath = path.join(__dirname, '..', 'events.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

/**
 * TODO: Implement deduplication by event_id, keeping latest event_ts.
 * @param {Array<Object>} events
 * @returns {Array<Object>}
 */
function dedupeLatestByEventId(events) {
  throw new Error('Not implemented: dedupeLatestByEventId');
}

/**
 * TODO: Implement daily summary and return top 3 by high_risk_rate (desc).
 * high_risk_rate should be rounded to 4 decimals.
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
