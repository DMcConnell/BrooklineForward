# BrooklineForward

Brookline's public budget data and town documents, made easier to explore.

**Live site:** [dmcconnell.github.io/BrooklineForward](https://dmcconnell.github.io/BrooklineForward)

## What this is

A simple static site that pulls together Brookline's publicly available financial data and key town documents in one place. Interactive charts make the budget numbers easier to understand, and a document library provides plain-language summaries of important reports and plans.

All data comes from official Town of Brookline sources. Every chart cites its source and every document links back to the town's site.

## What this is not

This is not a policy proposal, advocacy project, or official town resource. It's an independent effort by residents who want to make public data more accessible.

## Structure

```
BrooklineForward/
  index.html          Landing page
  budget.html         Interactive budget charts (Chart.js)
  documents.html      Searchable document library
  about.html          About the project
  assets/
    styles.css        Shared styles
    nav.js            Shared navigation
  data/
    budget.json       Budget data from town financial plans
    documents.json    Document metadata and summaries
  docs/               Local backup copies of town PDFs
    budgets/
    reports/
```

## Data sources

- FY2025 Financial Plan (Town of Brookline)
- FY2026-FY2030 Long Range Financial Plan (December 2024)
- Article 9: FY2026 Budget (Advisory Committee, May 2025)
- ERSC Final Report (March 2026)

## Contributing

Found an error? Know of a document we should include? Want to suggest a visualization?
[Open an issue](https://github.com/dmcconnell/BrooklineForward/issues).
