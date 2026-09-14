---
title: 'Platform Delivery Blueprint (Terraform + AWS + Kubernetes)'
description: 'Code-first platform proof project that provisions an AWS foundation with Terraform, deploys a Dockerized Node.js API to Kubernetes with health probes and autoscaling, and validates app, manifest, and IaC changes through GitHub Actions.'
imgSrc: '/assets/images/projects/platform-delivery-blueprint.svg'
startDate: 2026-09-14T00:00:00Z
imgAlt: 'Platform delivery blueprint project'
openSource: false
category: Terraform, AWS, Kubernetes, GitHub Actions, NodeJS
runningOrder: 0
---

<div class=" shadow-xl rounded-2xl p-6 mb-8 ">
  <h2 class="text-2xl font-semibold mb-4">Why I built it</h2>
  <p>
    I wanted a concrete infrastructure-as-code proof project that demonstrates
    end-to-end platform ownership without overstating my professional history.
    This case study is a code-first blueprint built inside the portfolio
    repository and designed to be deployable later with real AWS credentials.
  </p>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">What the project includes</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li><strong>Terraform</strong> for AWS networking, IAM, EKS, ECR, CloudWatch logging, ACM certificate creation, Route53-backed DNS validation, and SSM parameter storage.</li>
    <li>A small <strong>Node.js API</strong> with <code>/healthz</code>, <code>/readyz</code>, and <code>/metrics</code> endpoints.</li>
    <li><strong>Kubernetes manifests</strong> for deployment, service, load balancer exposure, autoscaling, config, and disruption handling.</li>
    <li><strong>GitHub Actions</strong> to validate the app, assume AWS credentials through OIDC, apply infrastructure, and deploy the service.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Architecture</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>AWS foundation includes a VPC, public/private subnets, NAT, EKS control plane, managed node group, ECR repository, CloudWatch log group, and ACM certificate flow.</li>
    <li>The application layer is a Dockerized Node.js API designed for health checks, readiness checks, Prometheus-style metrics, and structured stdout logs.</li>
    <li>Kubernetes deployment patterns include rolling updates, readiness and liveness probes, NLB service exposure, HPA thresholds, and a PodDisruptionBudget.</li>
    <li>CI/CD validation and deployment are handled in GitHub Actions with remote Terraform state, OIDC-based AWS access, and Route53 DNS automation.</li>
  </ul>

  <div class="my-6 rounded-2xl border border-base-300 bg-base-200/40 p-5">
    <h3 class="text-lg font-semibold mb-3">Architecture view</h3>
    <pre class="overflow-x-auto whitespace-pre-wrap text-sm leading-6"><code>GitHub push / PR
  ↓
GitHub Actions
  ├─ Node.js tests
  ├─ Kubernetes manifest render
      ├─ Terraform fmt + validate
      └─ OIDC deploy job

    Terraform
      ↓
    AWS VPC + subnets + NAT + IAM + EKS + ECR + CloudWatch + ACM + SSM
      ↓
    Kubernetes deployment + load balancer service + HPA + PDB
      ↓
    Node.js API with health, readiness, metrics, structured logs, DNS, and HTTPS</code></pre>
      </div>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Repository implementation</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li><code>/platform/aws-platform-showcase/bootstrap</code> provisions remote state storage and the GitHub OIDC deployment role.</li>
    <li><code>/platform/aws-platform-showcase/terraform</code> contains the infrastructure code.</li>
    <li><code>/platform/aws-platform-showcase/k8s</code> contains the deployable Kubernetes manifests.</li>
    <li><code>/platform/aws-platform-showcase/app</code> contains the sample service and tests.</li>
    <li><code>/.github/workflows/platform-showcase.yml</code> validates the showcase on relevant changes.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Operational evidence</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Readiness, liveness, and startup probes are built into the deployment contract.</li>
    <li>Rolling update settings, minimum replica counts, and HPA thresholds are defined in code rather than implied.</li>
    <li>Metrics are exposed in Prometheus format and service/pod annotations support scrape-based monitoring.</li>
    <li>Application configuration is designed to live behind an SSM parameter path instead of hard-coded values.</li>
    <li>ECR image scanning, ACM certificate issuance, CloudWatch log retention, and OIDC-based deployment access are defined in the infrastructure layer.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">Engineering result</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Created a truthful, code-backed Terraform and Kubernetes proof project for platform-focused applications.</li>
    <li>Established a reusable blueprint for future live deployment on AWS without needing to invent past production ownership.</li>
    <li>Added demonstrable IaC, release validation, and runtime health patterns directly to the portfolio repository.</li>
  </ul>
</div>
