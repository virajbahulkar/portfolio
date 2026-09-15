export const FEATURED_BLOG_SLUGS = [
  'production-realtime-dashboard-cloud-architecture',
  'azure-devops-cicd-code-to-cloud',
  'terraform-aws-kubernetes-platform-delivery-blueprint',
] as const;

export const FLAGSHIP_PROJECT_SLUGS = [
  'platform-delivery-blueprint',
  'cognizant-finance-group-app',
  'tooljet',
  'wanderwhale-travel-portal',
] as const;

export const BLOG_GOVERNANCE_RULE =
  'Featured writing prioritization: Production Systems → Platform / Cloud → Backend Engineering → DevOps / CI-CD → Distributed Systems → Open Source Tooling → Frontend/UI.';

export const RELATED_BLOG_PROJECTS: Record<string, string[]> = {
  'production-realtime-dashboard-cloud-architecture': [
    'platform-delivery-blueprint',
    'cognizant-finance-group-app',
    'wanderwhale-travel-portal',
  ],
  'building-realtime-dashboard': [
    'platform-delivery-blueprint',
    'cognizant-finance-group-app',
    'wanderwhale-travel-portal',
  ],
  'azure-devops-cicd-code-to-cloud': [
    'cognizant-finance-group-app',
    'platform-delivery-blueprint',
  ],
  'terraform-aws-kubernetes-platform-delivery-blueprint': [
    'platform-delivery-blueprint',
  ],
  'vscode-folder-structure-extension': ['tooljet', 'chatwoot'],
  'wisely-choose-ui-library': ['tooljet', 'cognizant-finance-group-app'],
};
