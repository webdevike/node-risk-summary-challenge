const express = require('express');
const { loadEvents, dedupeLatestByEventId, buildRiskSummary } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/risk-summary', (_req, res) => {
  try {
    const events = loadEvents();
    const deduped = dedupeLatestByEventId(events);
    const summary = buildRiskSummary(deduped);
    res.json(summary);
  } catch (err) {
    res.status(500).json({
      error: 'Failed to build risk summary',
      details: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
