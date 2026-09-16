---
title: "WanderWhale Travel Portal"
description: "A travel portal where I worked on search, pricing, booking and payment reconciliation using React and Node.js."
projectNote: "Professional project at Saeloun Technologies."
startDate: 2025-11-10T00:00:00Z
openSource: false
category: ReactJS, NodeJS, ElasticSearch, PostgreSQL, Redis, Payments
runningOrder: 1
---

<div class=" shadow-xl rounded-2xl p-6 mb-8 ">
  <h2 class="text-2xl font-semibold mb-4">Problem</h2>
  <p>
    The travel portal needed connected search, pricing and checkout workflows,
    with payment reconciliation after a booking.
  </p>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Application features</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Travel search powered by ElasticSearch.</li>
    <li>Dynamic pricing and multi-currency bookings.</li>
    <li>Booking interfaces for mobile and desktop users.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Architecture</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>React frontend connected to <strong>Node.js</strong> application services.</li>
    <li><strong>ElasticSearch</strong> powered search and discovery experiences.</li>
    <li><strong>PostgreSQL</strong> and <strong>Redis</strong> supported transactional and caching workflows.</li>
    <li>Application services handled pricing, bookings and payment reconciliation.</li>
  </ul>

  <div class="my-6 rounded-2xl border border-base-300 bg-base-200/40 p-5">
    <h3 class="text-lg font-semibold mb-3">Anonymized architecture view</h3>
    <pre class="overflow-x-auto whitespace-pre-wrap text-sm leading-6"><code>Travel users
  ↓
React booking interface
  ↓
Node.js application services
  ↙          ↓            ↘
Search    Pricing/Booking   Payments/Reconciliation
  ↓            ↓                   ↓
ElasticSearch  PostgreSQL          Redis + external payment flows</code></pre>
  </div>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">My contribution</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Built travel workflows for discovery, pricing, checkout and payment reconciliation.</li>
    <li>Worked on application performance across mobile and desktop interfaces.</li>
    <li>Supported backend services and application deployments.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Technical focus</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Connecting search results to pricing and booking data.</li>
    <li>Handling payment reconciliation alongside booking records.</li>
    <li>Working with PostgreSQL for transactional data and Redis for caching.</li>
  </ul>
</div>
