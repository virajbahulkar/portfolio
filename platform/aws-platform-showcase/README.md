# AWS Platform Showcase

Code-first infrastructure proof project for the portfolio site.

## What it demonstrates
- Terraform-managed AWS foundation for a platform workload
- EKS-oriented Kubernetes deployment patterns
- Docker-packaged Node.js API with health, readiness, and metrics endpoints
- GitHub Actions validation and deploy flow using GitHub OIDC
- Remote Terraform state bootstrap with S3 and DynamoDB locking
- Domain and HTTPS-ready deployment inputs for a public API endpoint

## Structure
- `app/` — sample Node.js API
- `k8s/` — namespace, deployment, service, HPA, and disruption budget
- `bootstrap/` — remote state bucket, lock table, and GitHub OIDC deployment role
- `terraform/` — AWS VPC, NAT, EKS, ECR, CloudWatch logs, IAM, and SSM parameter path

## Local validation
```bash
cd platform/aws-platform-showcase/app
npm ci
npm test

cd ../terraform
terraform fmt -check -recursive
```

## Deployment setup

### 1. Bootstrap shared AWS resources
```bash
cd platform/aws-platform-showcase/bootstrap
terraform init
terraform apply -var-file=terraform.tfvars.example
```

This creates:
- an S3 bucket for remote Terraform state
- a DynamoDB table for state locking
- a GitHub OIDC IAM role for deployments

### 2. Configure GitHub environments
Create `dev` and `prod` environments in GitHub and set:
- secret: `AWS_ROLE_TO_ASSUME`
- variable: `AWS_REGION`
- variable: `TF_STATE_BUCKET`
- variable: `TF_STATE_LOCK_TABLE`

### 3. Deploy infrastructure and application
Run the `Platform Showcase Validation` workflow manually with the target environment.

The deploy job will:
- assume the AWS role through OIDC
- initialize Terraform with remote state
- apply the selected `terraform/environments/<env>.tfvars`
- build and push the API image to ECR
- update kubeconfig and apply the Kubernetes manifests
- wait for the public load balancer hostname
- create or update the Route53 CNAME record for the configured API host

## Deployment intent
This project is designed as a deployable blueprint. It is still intentionally separated from claims of past professional Terraform production ownership, but it is now structured so the infrastructure and delivery flow can be applied with real AWS credentials and DNS control.
