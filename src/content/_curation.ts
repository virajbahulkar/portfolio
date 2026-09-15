export const FEATURED_BLOG_SLUGS = [
  'my-first-real-ci-cd-journey-on-azure-from-build-to-prod',
  'building-realtime-dashboard',
  'from-code-to-cloud-real-world-guide-to-end-to-end-project-execution-using-azure-devops',
] as const;

export const FLAGSHIP_PROJECT_SLUGS = [
  'platform-delivery-blueprint',
  'cognizant-finance-group-app',
  'tooljet',
  'wanderwhale-travel-portal',
] as const;

export const BLOG_GOVERNANCE_RULE =
  'Featured writing is reserved for production-focused backend, platform, and cloud delivery evidence. Older or less relevant posts remain archived or are removed.';

export const RELATED_BLOG_PROJECTS: Record<string, string[]> = {
  'my-first-real-ci-cd-journey-on-azure-from-build-to-prod': [
    'platform-delivery-blueprint',
  ],
  'building-realtime-dashboard': [
    'platform-delivery-blueprint',
    'cognizant-finance-group-app',
    'wanderwhale-travel-portal',
  ],
  'vscode-folder-structure-extension': ['tooljet'],
};
