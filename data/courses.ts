export type SyllabusItem = { title: string; bullets: string[] };
export type Course = {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  mode: string;
  level: string;
  highlights: string[];
  syllabus: SyllabusItem[];
};

export const courses: Course[] = [
  {
    slug: "java-full-stack",
    title: "Java Full Stack",
    tagline:
      "Spring Boot, REST APIs, databases and React — build production-ready apps.",
    duration: "8–12 weeks",
    mode: "Online & In-person",
    level: "Beginner to Advanced",
    highlights: [
      "Spring Boot APIs, JPA, Security",
      "React frontend with TypeScript",
      "PostgreSQL, Docker, CI/CD",
      "Mock interviews & resume help"
    ],
    syllabus: [
      { title: "Foundations", bullets: ["Java essentials, OOP", "Git & GitHub", "HTTP/REST"] },
      { title: "Backend", bullets: ["Spring Boot, JPA", "Auth (JWT), testing", "Postgres & Docker"] },
      { title: "Frontend", bullets: ["React + TS", "Forms & routing", "Accessibility & polish"] },
      { title: "DevOps", bullets: ["GitHub Actions", "Containers", "Basic AWS/GCP"] }
    ]
  },
  {
    slug: "react-web-dev",
    title: "React Web Dev",
    tagline: "Modern React with TypeScript, hooks, performance and real projects.",
    duration: "6–10 weeks",
    mode: "Online & In-person",
    level: "Beginner to Intermediate",
    highlights: [
      "React 18 + TypeScript",
      "Design systems & forms",
      "API integration, testing",
      "Performance & accessibility"
    ],
    syllabus: [
      { title: "Core React", bullets: ["Hooks & context", "Routing & data", "State & server sync"] },
      { title: "UX & Quality", bullets: ["Design systems", "Forms & validation", "Testing"] },
      { title: "Perf & Deploy", bullets: ["Optimization", "Code-split", "Deploys"] }
    ]
  },
  {
    slug: "aws-cloud",
    title: "AWS Cloud",
    tagline: "Compute, storage, networking, IaC and real deployments.",
    duration: "6–10 weeks",
    mode: "Online & In-person",
    level: "Beginner to Intermediate",
    highlights: ["EC2/ECS/Lambda", "S3/RDS", "IAM & VPC", "Terraform"],
    syllabus: [
      { title: "Core AWS", bullets: ["IAM, VPC", "EC2 & ALB", "S3 & RDS"] },
      { title: "Serverless & Containers", bullets: ["Lambda", "ECS/ECR", "CloudWatch"] },
      { title: "IaC", bullets: ["Terraform", "Workspaces", "Pipelines"] }
    ]
  },
  {
    slug: "gcp-cloud",
    title: "GCP Cloud",
    tagline: "Compute, storage, GKE/Cloud Run, IAM and Terraform.",
    duration: "6–10 weeks",
    mode: "Online & In-person",
    level: "Beginner to Intermediate",
    highlights: ["GCE, Cloud Run/GKE", "Cloud SQL, IAM", "Terraform"],
    syllabus: [
      { title: "Core GCP", bullets: ["Projects, IAM", "GCE & LB", "Cloud SQL"] },
      { title: "Containers", bullets: ["Cloud Run", "GKE", "Monitoring"] },
      { title: "IaC", bullets: ["Terraform on GCP", "Policies", "Pipelines"] }
    ]
  },
  {
    slug: "business-analyst",
    title: "Business Analyst",
    tagline:
      "Requirements, stakeholder management, documentation and tools that matter.",
    duration: "6–8 weeks",
    mode: "Online & In-person",
    level: "Beginner",
    highlights: ["BRD/FRD", "Process mapping", "SQL basics", "Interview prep"],
    syllabus: [
      { title: "BA Foundations", bullets: ["Discovery", "Requirements", "Stakeholders"] },
      { title: "Analysis", bullets: ["UML/maps", "Stories", "Wireframes"] },
      { title: "Analytics", bullets: ["SQL", "Dashboards", "KPIs"] }
    ]
  },
  {
    slug: "salesforce-developer",
    title: "Salesforce Developer",
    tagline: "Apex, LWC, flows and platform fundamentals with projects.",
    duration: "8–10 weeks",
    mode: "Online & In-person",
    level: "Beginner to Intermediate",
    highlights: ["Org setup", "Apex & LWC", "Integrations", "Best practices"],
    syllabus: [
      { title: "Platform", bullets: ["Objects & fields", "Security", "Flows"] },
      { title: "Dev", bullets: ["Apex", "LWC", "Testing"] },
      { title: "Integrations", bullets: ["REST/SOAP", "Async", "Deployments"] }
    ]
  },
  {
    slug: "servicenow-developer",
    title: "ServiceNow Developer",
    tagline: "Build apps on the Now Platform with workflows and scripting.",
    duration: "8–10 weeks",
    mode: "Online & In-person",
    level: "Beginner to Intermediate",
    highlights: ["Studio & tables", "Business rules", "Workflows", "Catalogs"],
    syllabus: [
      { title: "Core", bullets: ["Studio setup", "Tables", "ACLs"] },
      { title: "Logic", bullets: ["Business rules", "Client scripts", "UI actions"] },
      { title: "Apps", bullets: ["Flow Designer", "Catalog", "Integrations"] }
    ]
  }
];

export function getCourseBySlug(slug: string) {
  return courses.find(c => c.slug === slug);
}
