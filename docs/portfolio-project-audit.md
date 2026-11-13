# Portfolio project source audit

Audit date: 13 November 2026  
Scope: Stage 1 source verification for the four featured engineering projects. No AWS resources were provisioned and no project source repositories were modified.

## 1. Progressive Delivery Platform

Source: https://github.com/amit-cloudops-ai/progressive-delivery-eks-platform

Evidence inspected:
- README.md
- docs/architecture.svg
- terraform/ and manifests/ repository tree
- Argo Rollouts, Gateway API, canary route, AnalysisTemplate, observability and AI copilot manifests

Verified description:
- Terraform provisions VPC, EKS and Karpenter IAM/SQS plumbing.
- Argo CD syncs the repository as GitOps source of truth.
- Argo Rollouts performs metric-gated canary progression using Gateway API / AWS VPC Lattice weighted traffic.
- README documents 10% → analysis → 50% → 100% progression and automatic abort on failed analysis.
- Prometheus, Grafana, Loki and Alertmanager provide observability and Slack alerts; an AI copilot summarizes incident context.

Portfolio wording approved by source:
“Releases reach a small group first and roll back automatically when something breaks.”

Diagram: `public/images/projects/progressive-delivery-platform.svg`

## 2. Smart Employee Onboarding & Identity Service

Source: https://github.com/amit-cloudops-ai/hrms-onboarding-service

Evidence inspected:
- README.md
- docs/api-contract.md
- docs/data-model.md
- docs/adr/0001-step-functions-callback-pattern.md
- docs/adr/0002-simulated-and-real-adapters.md
- service-level README files and repository tree

Verified documented design:
- Employee identity: UUID employee record in DynamoDB, Cognito login and SES invitation.
- Step Functions orchestrates document collection, IT provisioning, policy sign-off and manager introduction.
- ADR describes task-token callbacks and a 24-hour reminder/wait loop.
- Documents are described as encrypted S3 objects with validation and SNS HR notification.
- External HR/IT integrations are explicitly designed behind simulated/real adapter Lambdas.

Important limitation:
The default branch currently contains service README placeholders and design documents, but not the implementation handlers or state-machine/template files in the expected service paths. The architecture is therefore a documented design, not fully verifiable from current default-branch implementation. Do not claim “no manual steps” or complete end-to-end automation until implementation evidence is present and verified.

Diagram: `public/images/projects/employee-onboarding-service.svg`  
The diagram labels this as documented design.

## 3. Three-Tier Web Application on AWS

Source: https://github.com/amit-cloudops-ai/Devops-3-tire-project-001

Evidence inspected:
- README.md
- three_tier_aws_architecture.png
- application config and Nginx config paths

Verified architecture:
- Custom VPC 10.0.0.0/16 across us-east-1a and us-east-1b subnet layouts.
- Nginx reverse proxy in a public subnet.
- Tomcat / Java Spring Boot application in a private app subnet.
- Amazon RDS MySQL in a private data subnet.
- Security group path: public Nginx → app tier port 8080 → database port 3306.
- README states the second-AZ app and database subnets are reserved for HA; it does not evidence active app/database replicas in both AZs.
- README describes a manual deployment process, not an IaC-driven deployment pipeline.

Portfolio wording:
“A secure web application separates its public entry point, application server and database into isolated network tiers.”

Diagram: `public/images/projects/three-tier-web-app.svg`

## 4. Zero-Downtime API Deployments with AWS API Gateway

Source: https://github.com/amit-cloudops-ai/https-github.com-Amitpm8-aws-zero-downtime-deployment

Evidence inspected:
- README.md
- blue-function.py
- green-functino.py
- repository tree

Verified design:
- API Gateway REST API routes /hello to Lambda.
- Blue Lambda represents v1; Green Lambda represents v2.
- Production and staging stages are documented.
- API Gateway canary setting is documented at 10%; README describes a conceptual progression of 10%, 25%, 50%, then 100%.
- CloudWatch 4xx/5xx alarms notify through SNS email.
- Rollback instructions are manual: set production canary percentage to 0 and redeploy.

Important wording correction:
The repository does not evidence automated alarm-triggered rollback. Do not describe this project as automatically rolling back. Safer wording: “New API versions can be tested in staging and introduced to production through a controlled canary release, with CloudWatch alarms and a documented rollback path.”

Diagram: `public/images/projects/zero-downtime-api-deployment.svg`

## Cross-project publishing checks

- Use only these four repositories for the featured engineering work. Do not include Ventablk client projects in this portfolio.
- Confirm the onboarding project’s public-sharing permissions before publishing sensitive implementation detail.
- Verify every GitHub link before launch.
- Keep the distinction between implemented behaviour and documented/planned architecture visible in each case study.
