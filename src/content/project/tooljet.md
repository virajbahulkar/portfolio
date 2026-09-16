---
title: "ToolJet Open Source Contributions"
description: "I contributed React frontend fixes to ToolJet, an open-source low-code platform, including widget search, table editing and form validation."
link: "https://github.com/ToolJet/ToolJet/commits?author=virajbahulkar"
imgSrc: "/assets/images/projects/tooljet.png"
projectNote: "Open-source contributions through reviewed and merged pull requests in 2021."
# Earlier metrics retained for owner confirmation, not attributed to the linked fixes:
# Platform adoption: 10,000+ developers and 500K+ monthly downloads.
# Contribution claims: 35% builder performance improvement, 60% backend query latency
# reduction, 65% test coverage expansion and collaboration with 50+ active contributors.
# Confirm measurement dates, baselines and contribution scope before republication.
# The linked frontend fixes alone do not establish these platform/backend metrics.
startDate: 2025-05-09T00:00:00Z
imgAlt: "ToolJet open-source contributions"
openSource: true
category: ReactJS, NodeJS, TypeScript, PostgreSQL, Open Source
runningOrder: 1
---

<div class=" shadow-xl rounded-2xl p-6 mb-8 ">
  <h2 class="text-2xl font-semibold mb-4">Problem</h2>
  <p>
    ToolJet lets teams build internal tools with a visual editor. I worked on
    bugs in the editor and application management screens, including search
    results, table updates and user-input validation.
  </p>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Merged fixes</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li><a href="https://github.com/ToolJet/ToolJet/pull/742" target="_blank" rel="noreferrer">PR #742:</a> fixed widget search to use the full component list rather than previously filtered results.</li>
    <li><a href="https://github.com/ToolJet/ToolJet/pull/436" target="_blank" rel="noreferrer">PR #436:</a> fixed duplicate table-edit updates by tracking updates by row index.</li>
    <li><a href="https://github.com/ToolJet/ToolJet/pull/822" target="_blank" rel="noreferrer">PR #822:</a> added validation and field errors to the organization-user creation form.</li>
    <li><a href="https://github.com/ToolJet/ToolJet/pull/544" target="_blank" rel="noreferrer">PR #544:</a> corrected launch links and tooltips when an application had no deployed version.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Architecture</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>The visual builder uses <strong>React</strong>; this is where the linked contributions were made.</li>
    <li>The wider application includes a <strong>Node.js</strong> backend and <strong>PostgreSQL</strong>.</li>
    <li>I contributed frontend fixes through the upstream review process; the wider architecture describes the platform maintained by the ToolJet team.</li>
  </ul>

  <div class="my-6 rounded-2xl border border-base-300 bg-base-200/40 p-5">
    <h3 class="text-lg font-semibold mb-3">Application context</h3>
    <pre class="overflow-x-auto whitespace-pre-wrap text-sm leading-6"><code>Internal users / developers
  ↓
React visual builder
  ↓
Node.js query + execution layer
  ↓
PostgreSQL and connected data flows
Contribution workflow: pull request → review → merge</code></pre>
  </div>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">My approach</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Kept widget search independent of the previous search result.</li>
    <li>Stored table changes by row index to avoid duplicate update entries.</li>
    <li>Displayed validation errors next to the relevant form fields.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Contribution scope</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Changes were submitted to the upstream repository for review.</li>
    <li>My fixes addressed widget search correctness, duplicate table updates, form validation and application launch behaviour.</li>
    <li><a href="https://github.com/ToolJet/ToolJet/pull/261" target="_blank" rel="noreferrer">PR #261</a> also contributed the frontend portion of REST-query datasource-prefix display; backend work was outside that change.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Contribution history</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>The linked pull requests were merged between June and October 2021.</li>
    <li><a href="https://github.com/ToolJet/ToolJet/commits?author=virajbahulkar" target="_blank" rel="noreferrer">View my authored commits</a> for the contribution history.</li>
  </ul>
</div>
