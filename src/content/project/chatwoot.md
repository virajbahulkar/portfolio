---
title: "Chatwoot"
description: "Open-source contribution proof showing authored Chatwoot bug fixes across contact search, Telegram message handling, and sidebar data presentation."
link: "https://github.com/chatwoot/chatwoot/commits?author=virajbahulkar"
imgSrc: "/assets/images/projects/chatwoot.png"
impactSnapshot: "Impact: shipped verifiable open-source fixes that improved reliability in active product flows."
startDate: 2021-10-25T00:00:00Z
imgAlt: "Project Maps"
openSource: true
category: Ruby on Rails, VueJS, Typescript, PostgreSQL
runningOrder: 3
---

<div class="shadow-xl rounded-2xl p-6 mb-8">
  <h2 class="text-2xl font-semibold mb-4">Contribution summary</h2>
  <p>
    I used Chatwoot as a focused open-source contribution example because the
    proof is concrete: authored pull requests, merged fixes, and small but real
    product bugs resolved in a large Rails + Vue codebase.
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

  <h2 class="text-2xl font-semibold mb-4">Contribution evidence</h2>
  <ul class="list-disc list-inside my-4 pt-1 space-y-2">
    <li>
      <strong>Merged PR #3241:</strong>
      fixed contact search behavior when phone numbers were entered with a country code by normalizing the search input before dispatching the query.
    </li>
    <li>
      <strong>Merged PR #3257:</strong>
      fixed Telegram media message handling so captions render correctly when no plain text body is present, and added a regression test around that path.
    </li>
    <li>
      <strong>Authored PR #3237:</strong>
      proposed a UI/data presentation fix for sidebar team-name casing in API output and related spec coverage.
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
      <p class="mt-2 text-sm leading-6">Sidebar team-name casing fix proposal in the Chatwoot API response layer.</p>
    </a>
  </div>

  <hr class="mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Why it stays on the site</h2>
  <p>
    This is not meant to compete with the larger ToolJet case study. It stays as
    lightweight proof that I can enter an established open-source codebase,
    isolate product bugs, ship focused fixes, and work within existing review
    flows.
  </p>
</div>
