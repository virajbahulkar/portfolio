export const FEATURED_BLOG_SLUGS = [
  'building-realtime-dashboard',
  'vscode-folder-structure-extension',
] as const;

export const FLAGSHIP_PROJECT_SLUGS = [
  'platform-delivery-blueprint',
  'cognizant-finance-group-app',
  'tooljet',
  'wanderwhale-travel-portal',
] as const;

export const BLOG_GOVERNANCE_RULE =
  'Featured writing prioritizes genuine existing content related to production systems, backend engineering, platform/cloud delivery, and engineering tooling. The number of featured posts may vary based on available high-signal content.';

export const RELATED_BLOG_PROJECTS: Record<string, string[]> = {
  'building-realtime-dashboard': [
    'platform-delivery-blueprint',
    'cognizant-finance-group-app',
    'wanderwhale-travel-portal',
  ],
  'vscode-folder-structure-extension': ['tooljet', 'chatwoot'],
  'wisely-choose-ui-library': ['tooljet', 'cognizant-finance-group-app'],
};
