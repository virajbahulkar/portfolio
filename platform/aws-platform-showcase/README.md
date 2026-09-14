# AWS Platform Showcase

Code-first infrastructure proof project for the portfolio site.

## What it demonstrates
- Terraform-managed AWS foundation for a platform workload
- EKS-oriented Kubernetes deployment patterns
- Docker-packaged Node.js API with health, readiness, and metrics endpoints
- GitHub Actions validation for the app, manifests, and Terraform

## Structure
- `app/` — sample Node.js API
- `k8s/` — namespace, deployment, service, ingress, HPA, and disruption budget
- `terraform/` — AWS VPC, NAT, EKS, ECR, CloudWatch logs, IAM, and SSM parameter path

## Local validation
```bash
cd platform/aws-platform-showcase/app
npm ci
npm test

cd ../terraform
terraform fmt -check -recursive
```

## Deployment intent
This project is designed as a deployable blueprint. It is code-first today and can be applied later with real AWS credentials and environment-specific values.
