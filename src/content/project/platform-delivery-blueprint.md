---
title: "Platform Delivery Blueprint (Terraform + AWS + Kubernetes)"
description: "Code-backed platform blueprint defining an AWS/EKS foundation in Terraform, Kubernetes runtime patterns, and GitHub Actions-based deployment automation."
imgSrc: "/assets/images/projects/platform-delivery-blueprint.svg"
impactSnapshot: "Impact: established a code-backed Terraform and Kubernetes platform blueprint for cloud delivery."
startDate: 2026-09-14T00:00:00Z
imgAlt: "Platform delivery blueprint project"
openSource: false
category: Terraform, AWS, Kubernetes, GitHub Actions, NodeJS
runningOrder: 0
---

<div class=" shadow-xl rounded-2xl p-6 mb-8 ">
  <h2 class="text-2xl font-semibold mb-4">Why I built it</h2>
  <p>
    I built this platform engineering project to implement an end-to-end cloud
    delivery path using Terraform, AWS, Kubernetes and GitHub Actions. It
    brings infrastructure provisioning, container orchestration, deployment
    automation, runtime health checks and operational controls into one
    code-backed architecture.
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
    <li>Implemented a reusable Terraform and Kubernetes platform blueprint covering infrastructure provisioning, CI/CD automation and runtime reliability patterns.</li>
    <li>Established a reusable AWS platform architecture that can evolve alongside continued Terraform and cloud engineering work.</li>
    <li>Added demonstrable IaC, release validation, and runtime health patterns directly to the portfolio repository.</li>
  </ul>
</div>
