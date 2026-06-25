export const profile = {
  name: "Subhajit Banik",
  title: "Microsoft Cloud Practitioner | Azure | DevOps | FinOps",
  intro:
    "Microsoft-certified Azure professional with 7+ years of experience in cloud infrastructure, FinOps, DevOps automation, and Azure governance.",
  summary:
    "Microsoft-certified Azure professional experienced in cloud infrastructure management, cost optimization, DevOps automation, identity and access governance, and reliability operations. Current work focuses on Azure FinOps, cost transparency, governance controls, Power BI cost dashboards, and automation that improves operational efficiency. AI is a personal productivity interest, explored through lightweight assistant and workflow automation projects.",
  cvPath: "/Subhajit_Banik_CV.pdf",
  experienceYears: "7+ yrs",
  location: "Kolkata, India",
  email: "subanik1995@gmail.com",
  phone: "8910024104",
  linkedin: "https://www.linkedin.com/in/subhajit-banik",
  github: "https://github.com/Subhajit-coolprojects/projects",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Highlights", href: "#highlights" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Personal Projects", href: "#personal-projects" },
    { label: "Contact", href: "#contact" }
  ],
  careerHighlights: [
    {
      title: "Azure FinOps & Governance",
      summary:
        "Driving cost optimization, forecasting, budgets, alerts, Power BI dashboards, and governance reporting across enterprise Azure environments."
    },
    {
      title: "DevOps & Infrastructure Automation",
      summary:
        "Built Azure deployment workflows using Azure DevOps, YAML pipelines, PowerShell, ARM templates, Bicep, Terraform, and automation runbooks."
    },
    {
      title: "Cloud Security & Access Governance",
      summary:
        "Implemented PAM, RBAC, Active Directory groups, access policies, and governance controls across large cloud environments."
    },
    {
      title: "Endpoint / Intune Leadership",
      summary:
        "Handled endpoint modernization and compliance-oriented work as corporate experience, including Workspace ONE to Intune migration leadership and endpoint governance responsibilities."
    },
    {
      title: "Microsoft Datacenter Operations",
      summary:
        "Supported Microsoft Red Dog Operations, Azure Q10 architecture troubleshooting, cluster diagnostics, S2-S4 issue handling, and global datacenter collaboration."
    },
    {
      title: "Recognition",
      summary:
        "Received Star&R recognition at PwC and contributed to Microsoft datacenter operations supporting Tokyo Olympics server staging in 2021."
    }
  ],
  skills: [
    {
      title: "Azure Cloud",
      items: ["Azure infrastructure", "Azure Entra", "Azure Policy", "RBAC", "Resource Graph"]
    },
    {
      title: "DevOps & Automation",
      items: ["Azure DevOps", "CI/CD", "PowerShell", "Bicep", "Terraform", "YAML pipelines"]
    },
    {
      title: "FinOps",
      items: ["Azure Cost Management", "Azure Advisor", "Budgets", "Alerts", "Chargeback tagging"]
    },
    {
      title: "Monitoring & Reliability",
      items: ["Azure Monitor", "Log Analytics", "Splunk", "KQL", "IcM", "ServiceNow"]
    },
    {
      title: "Identity & Governance",
      items: [
        "Privileged Access Management",
        "Thycotic Privilege Manager",
        "Active Directory",
        "Shared Access Signature",
        "Group Policy implementation for RBAC"
      ]
    },
    {
      title: "AI Productivity Interest",
      items: ["Personal assistants", "Prompt workflows", "Desktop automation", "Research helpers"]
    }
  ],
  experience: [
    {
      company: "PwC India",
      role: "Senior Associate",
      period: "Aug 2024 - Present",
      bullets: [
        "Working on Azure Cost Optimization and Governance across PwC global Azure environments.",
        "Forecast infrastructure costs using Azure Pricing Calculator and scenario-based cost models.",
        "Report spend anomalies, cost-saving opportunities, and forecast accuracy insights to leadership.",
        "Analyze subscription-level costs and performance data using Azure Cost Management + Billing and Azure Advisor.",
        "Implement Azure Budgets and Alerts for proactive cost monitoring and variance control.",
        "Develop Power BI dashboards using Cost Management API and KQL analytics for spend KPIs and optimization trends.",
        "Partner with global infrastructure and finance teams on tagging, chargeback alignment, and cost governance standards."
      ]
    },
    {
      company: "PwC India",
      role: "Associate",
      period: "May 2023 - Aug 2024",
      bullets: [
        "Worked as a technical consultant for Cloud Infrastructure Services with focus on Azure financial governance and optimization.",
        "Led endpoint migration activities involving Workspace ONE to Microsoft Intune, supporting device compliance, endpoint governance, and modernization requirements.",
        "Deployed Thycotic Privilege Manager for EMEA and APAC firms and aligned it with Azure governance standards.",
        "Created Active Directory groups, RBAC rules, and policies for cost and access compliance.",
        "Implemented Privileged Access Management and cost optimization strategies across Azure environments.",
        "Analyzed subscription spend through Azure Cost Management + Billing to identify underutilized resources.",
        "Automated reporting through Power BI and Splunk for license usage, resource allocation, and monthly cost trends."
      ]
    },
    {
      company: "LTIMindtree",
      role: "Senior Cloud Engineer",
      period: "Sep 2021 - Apr 2023",
      bullets: [
        "Worked on Microsoft Contoso Infrastructure as Code initiatives for Azure deployment workflows.",
        "Implemented CI/CD in Azure after requirement analysis with client teams.",
        "Prepared infrastructure automation scripts using YAML, PowerShell, ARM templates, and Azure DevOps pipelines.",
        "Triggered CI builds with required deployment parameters and monitored build activity through Azure DevOps dashboards.",
        "Created project workflows for server provisioning and SKU update processes."
      ]
    },
    {
      company: "LTIMindtree",
      role: "Windows Server Administrator",
      period: "Cloud Infrastructure Engineer - Microsoft Red Dog Operations",
      bullets: [
        "Handled Identity Access Management aligned with Azure Information Protection requirements.",
        "Provided role-based access control for test engineers and managed access to storage accounts using shared access signatures.",
        "Supported data backup and recovery, including HDD snapshots, data mirroring, IcM alerts, and weekly scheduled practices.",
        "Created Azure Automation runbooks and custom script extensions for performance monitors and application alerts.",
        "Used Azure Monitor, Activity Log, and Log Analytics for infrastructure and application monitoring.",
        "Collaborated with global datacenter teams on Azure Q10 architecture deployment and troubleshooting in Microsoft datacenters.",
        "Resolved S2-S4 issues and performed cluster diagnostics using RDP and XTS tools."
      ]
    }
  ],
  personalProjects: [
    {
      title: "Dr. Banik - Autonomous Personal Executive Assistant",
      summary:
        "A local-first desktop assistant built with a sidecar architecture: Electron for the desktop shell, React for the UI, FastAPI/Python for the intelligence layer, and SQLite for local memory.",
      tech: ["Electron", "React", "FastAPI", "SQLite", "LLM orchestration"],
      impact: "Personal AI enthusiast project exploring chat, local memory, system monitoring, provider-agnostic LLM routing, and future autonomous desktop actions."
    },
    {
      title: "Azure Landing Zone POC",
      summary:
        "A React and TypeScript proof of concept for Azure landing zone planning, with dashboard, architecture explorer, CAF/WAF views, governance, networking, security, monitoring, resource inventory, roadmap, and script console modules.",
      tech: ["React", "TypeScript", "Vite", "Azure CAF", "Azure WAF", "Recharts"],
      impact: "Shows practical Azure architecture thinking through a rules-based recommendation engine that converts intake answers into landing zone design guidance without paid APIs."
    },
    {
      title: "Azure PGP File Encryption Automation",
      summary:
        "Automation flow for secure file encryption and controlled transfer patterns using Azure-native services and scripting.",
      tech: ["Azure", "PowerShell", "PGP", "Automation"],
      impact: "Improves file handling consistency, lowers manual effort, and supports secure operational processes."
    }
  ],
  certifications: [
    "Microsoft Certified: Azure Administrator Associate AZ-104",
    "Microsoft Certified: Azure Security Engineer Associate AZ-500",
    "Microsoft Certified: DevOps Engineer Expert AZ-400"
  ],
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "West Bengal University of Technology, Kolkata",
      result: "2014 - 2018 | CGPA: 7.66/10"
    },
    {
      degree: "Post-Matriculated in Computer Science",
      institution: "St. Joan's School ISC, Kolkata",
      result: "2012 - 2014 | 82.5%"
    },
    {
      degree: "Matriculated in Science",
      institution: "St. Joan's School ICSE, Kolkata",
      result: "2012 | 89.6%"
    }
  ]
} as const;
