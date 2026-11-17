# Amit Madakatti — Professional Profile & Career Record

This is the repository archive of the information supplied in “Amit Madakatti Portfolio Content Brief”. It is documentation only; it does not modify the website.

## Identity
- Name: Amit Madakatti (resume name: Amit P M)
- Title: Cloud & DevOps Engineer
- Location: Ranebennur, Karnataka, India
- Target roles: DevOps Engineer, Cloud Engineer, Platform Engineer, SRE
- Headline: “I design and run the cloud systems that keep products reliable.”
- Summary: Cloud & DevOps Engineer building automated, secure and scalable infrastructure on AWS.
- Public email to confirm: amitpm.work@gmail.com
- LinkedIn: https://linkedin.com/in/amitpm8
- Professional GitHub: https://github.com/amit-cloudops-ai
- Older GitHub: https://github.com/Amitpm8 (repositories being reviewed/migrated)
- The source brief says not to show Instagram, Fiverr, CGPA or phone number on the site for now.

## Career story — From raw metal to the cloud
1. **Forged (NITK, 2021–2025; BHEL trainee 2024):** Metallurgical Engineering graduate who learned systems thinking through materials and factory lines, then applied it to infrastructure.
2. **Taught (Sep 2025–Jun 2026):** Mathematics teacher for Class 11–12 and competitive-exam students; learned to explain complex concepts step by step.
3. **Built (Ajji’s Secret, Ventablk.co):** Built a local FMCG brand and a web design and branding agency.
4. **Shipped (DevOps projects):** Self-taught AWS and Kubernetes through hands-on builds involving VPCs, EKS, GitOps, canary releases and observability.
5. **Now (F13 Technologies):** AWS Cloud Intern, leading a team of four and building production-style cloud systems.

## Education
**B.Tech, Metallurgical and Materials Engineering**, National Institute of Technology Karnataka (NITK), Surathkal — December 2021 to May 2025.

## Experience

### AWS Cloud Intern — F13 Technologies, Bengaluru | Sep 2026–Present
- Leads a team of four interns.
- Team case study on Epic Games using AWS; owns the Lobby slides, match statistics and lessons section, and final design.
- Building the Smart Employee Onboarding & Identity Service.

### Mathematics Teacher — Kannur PU College, CBSE, Ranebennur | Sep 2025–Jun 2026
- Taught Mathematics to Class 11–12, including dedicated competitive-exam preparation.
- Designed and delivered lesson plans independently, managing pacing, assessments and exam readiness.
- Simplified complex concepts into step-by-step explanations.

### Founder — Ajji’s Secret, Ranebennur | Mar 2026–Present
- Built the brand to reported 80–100 daily store footfall, with 10–15 regular daily buyers.
- Established wholesale and retail distribution across 10+ kirana stores, supplying about 1,000 units/month to key accounts.
- Pitched hostel and fast-food owners, placed custom display racks in high-footfall spots and ensured nearby stores carried the product.

### Industrial Trainee, Manufacturing Operations — BHEL Electronics Division, Bengaluru | May–Jul 2024
- Improved on-floor delivery performance by a reported 30% through time-motion studies and line balancing.
- Coordinated across Engineering, PPC, Quality and Material Management.
- Wrote a department-wide report covering SAP workflow integration, ISO 9001 audits and defect-tracking systems.

### Founder — Ventablk.co
- Websites and branding for hospitals, schools and colleges; 10+ clients reported.
- Client builds include Siddaganga Hospital (Astro, custom design system, 3D hero) and Khannur Vidyanikethan CBSE School.
- Services: websites, Google Business Profile optimisation, SEO, converting posters and branding.

## Projects

### Progressive Delivery Platform on EKS — Flagship | Sep 2026
- **Problem:** Releasing a new version risks breaking production; need safe delivery and rollback.
- **Build:** Terraform-provisioned EKS; Karpenter node provisioning (about 10 seconds as stated); Kubernetes Gateway API traffic progression 10%, 50%, 100%; Argo CD GitOps; Argo Rollouts automated canary analysis; External Secrets with AWS Secrets Manager; Prometheus, Grafana and Loki; Alertmanager to Slack; OWASP Juice Shop demo application.
- **Incident copilot:** Claude-powered copilot is written and ready to deploy; say “built”, not “deployed”, until deployment is verified.
- **Reported result:** A broken release (non-existent image tag) was held back, marked Degraded and rolled back with zero downtime; canary split verified by real requests.
- **Stack:** Terraform, EKS, Karpenter, Gateway API, Argo CD, Argo Rollouts, External Secrets, Prometheus, Grafana, Loki, k6.
- **Repository:** https://github.com/amit-cloudops-ai/pdp-eks-gitops
- **Evidence missing:** rollback and Slack alert demo video.

### Smart Employee Onboarding & Identity Service (F13)
- **Problem:** New-hire onboarding is manual, slow and inconsistent across HR, IT and access.
- **Build:** Serverless HRMS identity spine using Lambda, DynamoDB, Cognito, SES, Step Functions, API Gateway, S3 and SNS; two-view frontend; cost estimate for 50 onboardings/month; team-built version with IAM roles per teammate.
- **Repository:** https://github.com/amit-cloudops-ai/hrms-onboarding-service
- **Evidence missing:** Step Functions execution screenshots, DynamoDB ER diagram, demo video and final evaluation outcome.

### Three-Tier Web Application on AWS | Jun 2026
- Three-tier VPC across two Availability Zones with six subnets isolating public, app and data tiers.
- Four layered Security Groups with least-privilege rules and two NAT Gateways for outbound app-tier traffic.
- Authenticated end-to-end login flow: Nginx, Tomcat (Spring Boot), RDS MySQL.
- Debugging: Tomcat 10 / Jakarta migration and ROOT folder shadowing the WAR file.
- Repository: https://github.com/Amitpm8/Devops-3-tire-project-001

### Zero-Downtime API Deployments on AWS | Mar 2026
- Blue-green and canary releases for a serverless API (Lambda, API Gateway), shifting traffic in 10% steps.
- CloudWatch Alarms and SNS detect 4XX/5XX spikes and reportedly alert within 60 seconds.
- Repository: https://github.com/Amitpm8/aws-zero-downtime-deployment

### Fargate Containers with an Application Load Balancer
- ECS Fargate, ECR and ALB running three containerised apps (demo app, Ghost, Metabase) on different ports.
- Architecture diagram, evidence screenshots and write-up.

### Earlier builds — include publicly only after repo review
- Multi-region EKS job tracker with Argo CD and GitHub Actions.
- Observability Platform (OpenTelemetry, Jaeger, Loki, Prometheus, Grafana, Alertmanager to Slack): https://github.com/Amitpm8/observability-platform
- Serverless file organiser (S3, Lambda, Rekognition, SNS).
- Kubernetes the Hard Way on AWS EC2.
- S3 and CloudFront static portfolio: https://github.com/Amitpm8/portfolio-aws-s3-cloudfront
- Custom VPC built from scratch.

## Client work — Ventablk.co
- Siddaganga Hospital website (Astro).
- Khannur Vidyanikethan CBSE School website.
- Case-study format: client, problem, design decisions, result.

## Skills
- **Languages/scripting:** Python, Bash/Shell, YAML, SQL.
- **AWS:** EC2, S3, VPC, IAM, Lambda, CloudFront, RDS, API Gateway, CloudWatch, ECS/Fargate, Step Functions, DynamoDB, Cognito.
- **Containers/orchestration:** Docker, Kubernetes, Amazon EKS, Karpenter, Gateway API, NGINX Ingress, CNI, CSI.
- **CI/CD and GitOps:** Git, GitHub Actions, Argo CD, Argo Rollouts.
- **Infrastructure as code:** Terraform, CloudFormation, Ansible.
- **Observability:** Prometheus, Grafana, Loki, OpenTelemetry, CloudWatch, Alertmanager.
- **OS/networking:** Linux (Ubuntu), DNS, TCP/IP, subnetting, Nginx.
- **Web/design:** Astro, Framer, Figma.

## Certifications and professional learning
See [the certification archive](../certifications/README.md). The source brief lists AWS Partner: Agentic AI Essentials; AWS Partner: Accreditation (Technical); AWS Technical Accredited, Trained Partner; AWS Partner: Generative AI on AWS (Technical); AWS Partner: Migrating Workloads to AWS (Technical); AWS Partner: Cloud Economics Essentials; and Fundamentals of Analytics on AWS Parts 1 and 2.
The brief listed AWS Certified Cloud Practitioner (via AWS Skill Builder) and McKinsey Forward as in progress at the time the brief was written; confirm current status before calling either completed.

**Credential accuracy:** Course and learning-plan completion is not equivalent to passing an AWS Certification exam. Use “AWS Certified” only after passing the relevant certification exam.

## Leadership and activities
- **Production Head, ENGINEER 2024, NITK Tech Fest:** Led a 15-member cross-functional team, ₹40L+ budget, 2,000+ attendees, 95% participant satisfaction (as stated in source).
- **Seminar Leader:** Data-driven decision-making workshop for 50+ participants, rated 4.8/5.

## Online presence
- LinkedIn series “Ops by Agents” about AI agents for DevOps, Cloud and SRE.
- Resume PDF intended as a download.
- LinkedIn posts and profile intended to link to the portfolio.

## Open items from the source brief
1. Verify live deployment before describing the incident copilot as deployed.
2. Retain evidence for claims such as “load-tested”, zero production incidents across 12+ releases, 80–100 daily footfall and repeat-customer percentage.
3. Add final onboarding evaluation outcome and evidence.
4. Add Ventablk.co start date, live client links and testimonials.
5. Confirm public email before publishing.
6. Review older GitHub repositories and decide which belong on the portfolio.
7. Add Credly verification links where available.
8. Record the EKS rollback and Slack alert demo.
9. Review older repositories before claiming migration; remove passwords, keys and webhook URLs before publishing.

**Source:** Amit Madakatti Portfolio Content Brief, supplied by Amit. Metrics and project outcomes are source claims and should be independently evidenced before external publication.
