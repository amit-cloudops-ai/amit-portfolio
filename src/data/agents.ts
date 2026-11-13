export const agents = [
  {
    slug: 'incident-triage',
    number: '01',
    name: 'Incident Triage',
    category: 'OBSERVABILITY / INCIDENT RESPONSE',
    summary: 'Turn a noisy alert into a useful first response: a concise incident summary, likely cause, supporting signals and practical next steps.',
    tools: ['Kubernetes events and workload state', 'Prometheus metrics and Grafana alerts', 'CloudWatch logs and alarms', 'Slack for incident summaries'],
    boundary: 'Read-only access to cluster state, metrics and logs. The agent may draft a Slack update, but it cannot restart workloads, change configuration or silence alerts.',
    approval: 'A human validates the suggested cause and explicitly chooses any remediation. The agent records the evidence and links used in its recommendation.',
    demo: 'A working incident walkthrough and evaluation examples will be published here as the agent is built.'
  },
  {
    slug: 'terraform-reviewer',
    number: '02',
    name: 'Terraform Reviewer',
    category: 'INFRASTRUCTURE AS CODE / CHANGE REVIEW',
    summary: 'Inspect a Terraform plan before it is applied. Explain resource changes, highlight destructive operations and surface security or reliability risks.',
    tools: ['Terraform plan output', 'GitHub pull requests and changed files', 'Policy and configuration checks', 'Repository documentation'],
    boundary: 'Read-only access to pull requests, plan artifacts and policy results. No AWS credentials for mutation and no permission to run terraform apply.',
    approval: 'A reviewer decides whether to request changes, approve the pull request or proceed with an apply. The agent provides findings with resource addresses and evidence.',
    demo: 'A sample plan review and finding report will be published here as the agent is built.'
  },
  {
    slug: 'release-guardian',
    number: '03',
    name: 'Release Guardian',
    category: 'CI/CD / PROGRESSIVE DELIVERY',
    summary: 'Follow a canary rollout, interpret release health signals and recommend whether the deployment should continue, pause or roll back.',
    tools: ['Argo Rollouts rollout status', 'Prometheus release metrics', 'Kubernetes workload health', 'GitHub deployment and commit context'],
    boundary: 'Read-only observation by default. The agent cannot promote a release, change traffic weights or initiate a rollback without an explicit approval path.',
    approval: 'A human approves promotion or rollback. Any future automated action must be constrained by a separately defined policy, with an audit trail.',
    demo: 'A canary evaluation walkthrough with sample health signals will be published here as the agent is built.'
  },
  {
    slug: 'cost-watcher',
    number: '04',
    name: 'Cost Watcher',
    category: 'AWS / FINOPS',
    summary: 'Identify potentially idle or oversized AWS resources and turn billing and utilization signals into prioritised savings recommendations.',
    tools: ['AWS Cost Explorer', 'CloudWatch utilization metrics', 'AWS resource inventory and tags', 'Recommendation reports'],
    boundary: 'Read-only billing, inventory and monitoring permissions. No permission to stop, resize, delete or modify AWS resources.',
    approval: 'A resource owner reviews each recommendation, checks workload impact and approves any change through the normal infrastructure workflow.',
    demo: 'An example cost review with evidence-backed recommendations will be published here as the agent is built.'
  },
  {
    slug: 'security-auditor',
    number: '05',
    name: 'Security Auditor',
    category: 'CLOUD SECURITY / CONFIGURATION REVIEW',
    summary: 'Find overly broad IAM permissions and exposed security-group rules, then explain the risk and suggest a narrower configuration.',
    tools: ['IAM policies and role trust relationships', 'EC2 security-group rules', 'AWS IAM Access Analyzer findings', 'Infrastructure-as-code source files'],
    boundary: 'Read-only access to IAM, network configuration and repository content. The agent cannot edit policies, revoke credentials or change security groups.',
    approval: 'A security or infrastructure owner reviews the evidence and proposed least-privilege change before it is implemented.',
    demo: 'A sample IAM and security-group audit report will be published here as the agent is built.'
  },
  {
    slug: 'runbook-writer',
    number: '06',
    name: 'Runbook Writer',
    category: 'DOCUMENTATION / RELIABILITY',
    summary: 'Convert an incident timeline into a structured runbook with symptoms, diagnostics, recovery guidance and verification steps.',
    tools: ['Incident timeline and post-incident notes', 'CloudWatch and application log excerpts', 'Existing runbooks and service documentation', 'GitHub for a proposed documentation change'],
    boundary: 'Read-only access to incident evidence and existing documentation. The agent can draft a change but cannot publish operational instructions without review.',
    approval: 'A service owner validates commands, prerequisites, rollback guidance and recovery checks before merging the runbook.',
    demo: 'A before-and-after runbook example will be published here as the agent is built.'
  }
];
