export const FEATURED_BLOG_SLUGS = [
  'my-first-real-ci-cd-journey-on-azure-from-build-to-prod',
  'from-code-to-cloud-real-world-guide-to-end-to-end-project-execution-using-azure-devops',
  'unlocking-azure-form-recognizer-for-real-world-use-the-complete-production-blueprint',
] as const;

export const FLAGSHIP_PROJECT_SLUGS = [
  'cognizant-finance-group-app',
  'wanderwhale-travel-portal',
  'platform-delivery-blueprint',
  'tooljet',
] as const;

// Add public case-study slugs only when the article's connection is confirmed.
// Shared technologies alone do not establish a project relationship.
export const RELATED_BLOG_PROJECTS: Record<string, string[]> = {};
