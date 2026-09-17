---
title: "Chatwoot"
description: "I contributed fixes for contact search and Telegram caption handling in Chatwoot, an open-source customer support platform."
link: "https://github.com/chatwoot/chatwoot/commits?author=virajbahulkar"
imgSrc: "/assets/images/projects/chatwoot.png"
projectNote: "Merged fixes in a Ruby on Rails and Vue codebase; a separate sidebar proposal was closed without merging."
startDate: 2021-10-25T00:00:00Z
imgAlt: "Chatwoot customer support interface"
openSource: true
category: Ruby on Rails, VueJS, Typescript, PostgreSQL
runningOrder: 3
---

<div class="shadow-xl rounded-2xl p-6 mb-8">
  <h2 class="text-2xl font-semibold mb-4">Contribution summary</h2>
  <p>
    I contributed fixes for contact search in Vue and Telegram caption handling
    in Ruby on Rails, working within Chatwoot’s existing application flows and
    upstream review process.
  </p>

  <div class="mt-6 flex flex-wrap gap-3">
    <a
      href="https://github.com/chatwoot/chatwoot/commits?author=virajbahulkar"
      target="_blank"
      rel="noreferrer"
      class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary"
    >
      View authored commits
    </a>
  </div>

  <hr class="mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Pull requests</h2>
  <ul class="list-disc list-inside my-4 pt-1 space-y-2">
    <li>
      <strong>Merged PR #3241:</strong>
      fixed contact search with a leading plus sign by removing it before dispatching the query.
    </li>
    <li>
      <strong>Merged PR #3257:</strong>
      used the Telegram caption when message text was absent or blank, and added a regression test for a caption without text.
    </li>
    <li>
      <strong>PR #3237 (closed, not merged):</strong>
      proposed title-casing sidebar team names in API output and updated a related assertion.
    </li>
  </ul>

  <div class="mt-6 grid gap-4 md:grid-cols-3">
    <a
      href="https://github.com/chatwoot/chatwoot/pull/3241"
      target="_blank"
      rel="noreferrer"
      class="rounded-2xl border border-base-300 bg-base-200/40 p-4 transition-colors hover:border-primary"
    >
      <p class="text-sm font-semibold">PR #3241</p>
      <p class="mt-2 text-sm leading-6">Contacts search fix for country-code input.</p>
    </a>
    <a
      href="https://github.com/chatwoot/chatwoot/pull/3257"
      target="_blank"
      rel="noreferrer"
      class="rounded-2xl border border-base-300 bg-base-200/40 p-4 transition-colors hover:border-primary"
    >
      <p class="text-sm font-semibold">PR #3257</p>
      <p class="mt-2 text-sm leading-6">Telegram caption rendering fix with regression test coverage.</p>
    </a>
    <a
      href="https://github.com/chatwoot/chatwoot/pull/3237"
      target="_blank"
      rel="noreferrer"
      class="rounded-2xl border border-base-300 bg-base-200/40 p-4 transition-colors hover:border-primary"
    >
      <p class="text-sm font-semibold">PR #3237</p>
      <p class="mt-2 text-sm leading-6">Sidebar team-name casing proposal, closed without merging.</p>
    </a>
  </div>

  <hr class="mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Approach</h2>
  <p>
    I kept the fixes focused on the affected application paths. For the Telegram
    fix, the regression test checks that a caption is saved as the message
    content when there is no text body.
  </p>
</div>
