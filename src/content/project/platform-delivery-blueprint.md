---
title: "Platform Delivery Blueprint (Terraform + AWS + Kubernetes)"
description: "A personal AWS infrastructure blueprint with Terraform, a containerized Node.js API, Kubernetes manifests and a GitHub Actions deployment workflow."
imgSrc: "/assets/images/projects/platform-delivery-blueprint.svg"
projectNote: "Personal proof of concept with source code; not a claim of a live production deployment."
startDate: 2026-09-14T00:00:00Z
imgAlt: "AWS platform blueprint with Terraform, GitHub Actions and Kubernetes"
openSource: false
category: Terraform, AWS, Kubernetes, GitHub Actions, NodeJS
runningOrder: 0
---

<div class=" shadow-xl rounded-2xl p-6 mb-8 ">
  <h2 class="text-2xl font-semibold mb-4">Why I built it</h2>
  <p>
    I built this personal project to explore how infrastructure, application
    deployment and runtime checks fit together. It combines Terraform for AWS,
    a small Node.js service, Kubernetes manifests and GitHub Actions.
  </p>

  <div class="mt-6 flex flex-wrap gap-3">
    <a
      href="https://github.com/virajbahulkar/portfolio/tree/main/platform/aws-platform-showcase"
      target="_blank"
      rel="noreferrer"
      class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary"
    >
      View source on GitHub
    </a>
    <a
      href="https://github.com/virajbahulkar/portfolio/blob/main/.github/workflows/platform-showcase.yml"
      target="_blank"
      rel="noreferrer"
      class="rounded-full border border-base-300 px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
    >
      View GitHub Actions workflow
    </a>
  </div>

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
    <div class="space-y-3 text-sm leading-6">
      <div class="rounded-xl border border-base-300 bg-base-100 px-4 py-3 font-mono">
        GitHub push / pull request
      </div>
      <div class="pl-4 text-base-content/60">↓</div>
      <div class="rounded-xl border border-base-300 bg-base-100 px-4 py-3">
        <p class="font-semibold">GitHub Actions</p>
        <ul class="mt-2 list-disc list-inside">
          <li>Node.js tests</li>
          <li>Kubernetes manifest render</li>
          <li>Terraform fmt + validate</li>
          <li>OIDC deploy job</li>
        </ul>
      </div>
      <div class="pl-4 text-base-content/60">↓</div>
      <div class="rounded-xl border border-base-300 bg-base-100 px-4 py-3 font-mono">
        AWS VPC + subnets + NAT + IAM + EKS + ECR + CloudWatch + ACM + SSM
      </div>
      <div class="pl-4 text-base-content/60">↓</div>
      <div class="rounded-xl border border-base-300 bg-base-100 px-4 py-3 font-mono">
        Kubernetes deployment + load balancer service + HPA + PDB
      </div>
      <div class="pl-4 text-base-content/60">↓</div>
      <div class="rounded-xl border border-base-300 bg-base-100 px-4 py-3 font-mono">
        Node.js API with health, readiness, metrics, structured logs, DNS, and HTTPS
      </div>
    </div>
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

  <h2 class="text-2xl font-semibold mb-4">Runtime configuration</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>The deployment manifest defines readiness, liveness and startup probes.</li>
    <li>Rolling update settings, replica limits and HPA thresholds are defined in the manifests.</li>
    <li>Metrics are exposed in Prometheus format and service/pod annotations support scrape-based monitoring.</li>
    <li>Terraform defines an SSM parameter path for configuration; the sample application reads its settings from environment variables.</li>
    <li>ECR image scanning, ACM certificate issuance, CloudWatch log retention, and OIDC-based deployment access are defined in the infrastructure layer.</li>
  </ul>

  <hr class=" mb-8 mt-8 border border-base-300">

  <h2 class="text-2xl font-semibold mb-4">What’s available</h2>
  <ul class="list-disc list-inside my-4 pt-1">
    <li>Infrastructure definitions, deployment manifests and a sample API with tests are available in this repository.</li>
    <li>The deployment workflow requires an AWS account, environment configuration and an explicit deployment run.</li>
    <li>The code demonstrates the setup; it does not establish uptime, load capacity or a completed cloud deployment.</li>
  </ul>
</div>
