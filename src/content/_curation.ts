export const FEATURED_BLOG_SLUGS = [
  'building-realtime-dashboard',
  'vscode-folder-structure-extension',
  'wisely-choose-ui-library',
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
  'building-realtime-dashboard': [
    'platform-delivery-blueprint',
    'cognizant-finance-group-app',
    'wanderwhale-travel-portal',
  ],
  'vscode-folder-structure-extension': [
    'platform-delivery-blueprint',
    'tooljet',
  ],
  'wisely-choose-ui-library': ['tooljet', 'cognizant-finance-group-app'],
};
