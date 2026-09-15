---
title: "Cognizant Finance Group App"
description: "Enterprise-scale financial platform serving 50K daily users with 99.9% uptime, built on AWS and Azure microservices with Kubernetes autoscaling, Azure DevOps release gates, centralized logging and monitoring, and 35% infrastructure cost optimization."
impactSnapshot: "Impact: sustained 50K DAU finance workloads at 99.9% uptime with 35% cost optimization."
startDate: 2026-01-15T00:00:00Z
openSource: false
category: ReactJS, NodeJS, AWS, Azure, Kubernetes, Azure DevOps
runningOrder: 1
---

<div class=" shadow-xl rounded-2xl p-6 mb-8 ">
  <h2 class="text-2xl font-semibold mb-4">Problem</h2>
  <p>
    The finance platform needed reliable customer-facing workflows, controlled
    releases, and infrastructure that could scale safely across regulated
    production environments.
  </p>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Scale</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li><strong>50K daily active users</strong> on production workloads.</li>
    <li><strong>99.9% uptime</strong> maintained for core customer journeys.</li>
    <li><strong>5 to 50 replicas</strong> during load growth through Kubernetes auto-scaling.</li>
    <li><strong>35% infrastructure cost optimization</strong> through tuning and right-sizing.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Architecture</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>React-based client journeys connected to backend services built with <strong>Node.js</strong>.</li>
    <li>Microservices ran across <strong>AWS and Azure</strong> environments.</li>
    <li><strong>Kubernetes</strong> handled orchestration and scaling for production workloads.</li>
    <li><strong>Azure DevOps CI/CD</strong> enforced automated build, test, and deployment gates.</li>
  </ul>

  <div class="my-6 rounded-2xl border border-base-300 bg-base-200/40 p-5">
    <h3 class="text-lg font-semibold mb-3">Anonymized architecture view</h3>
    <pre class="overflow-x-auto whitespace-pre-wrap text-sm leading-6"><code>Users
  ↓
React customer journeys
  ↓
Node.js service layer
  ↓
Finance microservices
  ↙                ↘
AWS workloads      Azure workloads
  ↓
Shared data and enterprise integrations

Git → Azure DevOps pipelines → Build/Test/Validate → Kubernetes environments
↓
Centralized logs, metrics, monitoring, alerts</code></pre>
  </div>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">My ownership</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Implemented finance-domain customer journeys across React interfaces and Node.js service integrations for production-facing workflows.</li>
    <li>Integrated Azure DevOps build, validation, and deployment gates into release workflows for safer promotion across environments.</li>
    <li>Supported Kubernetes scaling behavior, production monitoring, and cross-environment troubleshooting across AWS and Azure microservices.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Reliability & infrastructure</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Centralized application logs, metrics dashboards, and alerting rules improved visibility into production regressions.</li>
    <li>Kubernetes autoscaling policies expanded workloads from 5 to 50 replicas while health-oriented release checks helped maintain stability during demand spikes.</li>
    <li>Azure DevOps build, test, deployment, and post-release validation gates reduced rollout risk for high-availability workflows.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Engineering result</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Maintained a production platform serving <strong>50K daily active users</strong>.</li>
    <li>Helped sustain <strong>99.9% uptime</strong> for key finance journeys.</li>
    <li>Supported scale growth from <strong>5 to 50 replicas</strong> and improved cost efficiency by <strong>35%</strong>.</li>
  </ul>
</div>
