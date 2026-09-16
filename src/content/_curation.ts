export const FEATURED_BLOG_SLUGS = [
  'my-first-real-ci-cd-journey-on-azure-from-build-to-prod',
  'from-code-to-cloud-real-world-guide-to-end-to-end-project-execution-using-azure-devops',
  'unlocking-azure-form-recognizer-for-real-world-use-the-complete-production-blueprint',
] as const;

export const FLAGSHIP_PROJECT_SLUGS = [
  'platform-delivery-blueprint',
  'cognizant-finance-group-app',
  'tooljet',
  'wanderwhale-travel-portal',
] as const;

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
