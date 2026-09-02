import Slide1_Cover from '../slides/Slide1_Cover';
import Slide2_Overview from '../slides/Slide2_Overview';
import Slide3_Mandate from '../slides/Slide3_Mandate';
import Slide4_Offerings from '../slides/Slide4_Offerings';
import Slide5_Architecture from '../slides/Slide5_Architecture';
import Slide6_GMS from '../slides/Slide6_GMS';
import Slide7_Nexus from '../slides/Slide7_Nexus';
import Slide8_Reach from '../slides/Slide8_Reach';
import Slide9_AuthorityERP from '../slides/Slide9_AuthorityERP';
import Slide10_EnterpriseArch from '../slides/Slide10_EnterpriseArch';
import Slide11_UMSERP from '../slides/Slide11_UMSERP';
import Slide12_EcosystemCoverage from '../slides/Slide12_EcosystemCoverage';
import Slide13_DeploymentModel from '../slides/Slide13_DeploymentModel';
import Slide14_AMS from '../slides/Slide14_AMS';
import Slide15_TechStack from '../slides/Slide15_TechStack';
import Slide16_DeliveryMethodology from '../slides/Slide16_DeliveryMethodology';
import Slide17_DeliveryTeam from '../slides/Slide17_DeliveryTeam';
import Slide18_Consortium from '../slides/Slide18_Consortium';
import Slide19_Approach from '../slides/Slide19_Approach';
import Slide20_LetsBegin from '../slides/Slide20_LetsBegin';
import Slide21_ImplementationRoadmap from '../slides/Slide21_ImplementationRoadmap';
import Slide22_SLAModel from '../slides/Slide22_SLAModel';
import Slide23_ExecutiveSummary from '../slides/Slide23_ExecutiveSummary';

export const SLIDES_CONFIG = [
  {
    id: 'slide-1',
    number: '01',
    title: 'Higher Education Digital Suite',
    subtitle: 'Five integrated platforms. One national transformation.',
    category: 'Title Proposal',
    component: Slide1_Cover,
    notes: `EXECUTIVE BRIEFING & TALKING POINTS:
• Welcome Chairman & Committee. Introduce the Systech × Pakiza Joint Venture.
• Key Emphasis: 5 integrated platforms (UGC ERP, UMS-ERP, AMS, Nexus, GMS) replacing fragmented software.
• Scope: 18 University Modules, 11 Governance Modules, 10+ Anchor Universities across all 8 divisions of Bangladesh.
• Strategy: Highlight turnkey readiness and national digital transformation vision.`
  },
  {
    id: 'slide-2',
    number: '02',
    title: 'Our Solution at a Glance',
    subtitle: 'We propose a fully integrated digital higher-ed suite',
    category: 'Solution Scope',
    component: Slide2_Overview,
    notes: `TALKING POINTS & COMMITTEE Q&A:
• Problem Statement: Legacy higher-ed software in Bangladesh is siloed and paper-heavy.
• Solution: Single federated ecosystem spanning governance, public & private universities, students, research, and industry.
• Scope Summary: 5 Flagship Platforms, 18 University Modules, 11 Governance Modules, 10+ Customised Anchor Universities.`
  },
  {
    id: 'slide-3',
    number: '03',
    title: 'The Mandate We Serve',
    subtitle: 'A Nation Asking to Be Digitally Connected',
    category: 'National Mandate',
    component: Slide3_Mandate,
    notes: `KEY TALKING POINTS:
• Ecosystem Actors: Connects UGC Authority (The Hub), Public Universities (all 4 sectors), Private Universities, Students (millions annually), Faculty, Researchers, Industry Partners, and Funding Bodies.
• Delivery Pillars: Governance, Education, Research, Industry, and Student Centricity.
• Emphasis: Zero data fragmentation — data captured once flows seamlessly across all actors.`
  },
  {
    id: 'slide-4',
    number: '04',
    title: 'Our Five Flagship Offerings',
    subtitle: 'Digitize the complete lifecycle of higher education administration',
    category: 'Our Solution Suite',
    component: Slide4_Offerings,
    notes: `PLATFORM OVERVIEW TALKING POINTS (REORDERED):
1. UGC ERP: 11-module internal governance ERP for UGC operations.
2. UMS-ERP: 18-module university management core for public & private institutions.
3. AMS: Standalone admission automation handling peak seasonal loads.
4. NEXUS: Matchmaking engine pairing students & faculty with industry & TTOs.
5. GMS: Turnkey research grant management from proposal to audit trail.`
  },
  {
    id: 'slide-5',
    number: '05',
    title: 'How Our Platforms Connect Together',
    subtitle: 'Our Integration Architecture',
    category: 'Integration Architecture',
    component: Slide5_Architecture,
    notes: `ARCHITECTURE DEEP DIVE:
• Governance Tier: Central Authority (UGC) oversight with real-time Ministry of Education KPI dashboards.
• Foundation Layer: Built on BdREN TIGERfed SSO, API Gateway, RBAC & 2FA, Centralised Audit Logging.
• University Tier: UMS-ERP + AMS across all 8 divisions.`
  },

  /* ========================================================================= */
  /* OFFERING 01: UGC ERP */
  /* ========================================================================= */
  {
    id: 'slide-6',
    number: '06',
    title: 'Central Authority Automation Platform (UGC ERP)',
    subtitle: 'Our Offering 01 of 05',
    category: 'Flagship Module 01',
    component: Slide9_AuthorityERP,
    notes: `UGC ERP TALKING POINTS (OFFERING 01):
• 11 Functional Modules: HR & Admin (HRAS), Finance & Accounts (FMAS), Project Planning (PPDS), University Info (UIMS), Academic QA (AQAS), Research (RIES), Student Services (SSES), Int'l Affairs (CIAS), Inventory (IWMS), Service Requests (SRMS), Analytics & Reporting (HEARS).
• Key Benefit: Powers real-time KPI dashboards for UGC Leadership & Ministry of Education.`
  },
  {
    id: 'slide-7',
    number: '07',
    title: 'Modular & Scalable Enterprise Architecture',
    subtitle: 'Our Technical Architecture',
    category: 'Technical Architecture',
    component: Slide10_EnterpriseArch,
    notes: `TECHNICAL ADVANTAGE:
• Microservice Architecture: Independent DB & API for HR, Finance, Info, Research, Inventory, Analytics.
• Zero Monolithic Risk: Each microservice scales and deploys independently.
• Shared Data Layer: Postgres, Document Store, Audit Log, Identity.`
  },

  /* ========================================================================= */
  /* OFFERING 02: UMS-ERP */
  /* ========================================================================= */
  {
    id: 'slide-8',
    number: '08',
    title: 'UMS-ERP University Management',
    subtitle: 'Our Offering 02 of 05 · Flagship',
    category: 'Flagship Module 02',
    component: Slide11_UMSERP,
    notes: `UMS-ERP TALKING POINTS (OFFERING 02):
• Flagship 18-Module Core: Covers full student lifecycle, academic operations, and institutional administration.
• Value Proposition: Operate confidently. Customise boldly. Integrate seamlessly.
• Deployment: Standard core deployed across 8 divisions.`
  },
  {
    id: 'slide-9',
    number: '09',
    title: 'Complete University Digital Ecosystem',
    subtitle: 'Our UMS-ERP Functional Coverage',
    category: 'UMS-ERP Coverage',
    component: Slide12_EcosystemCoverage,
    notes: `FUNCTIONAL COVERAGE:
• Academic Lifecycle (8 Stages): Admission → Registration → Academics → Exam → Results → Research → Certify → Alumni.
• Institutional Modules (10 Areas): HR & Payroll, Finance, Inventory, Recruitment, Library, Accommodation, Transport, Complaints, Events, IoT.
• Embedded Tech: GPS Fleet Tracking, IoT Smart Campus Access, Native Mobile Apps.`
  },
  {
    id: 'slide-10',
    number: '10',
    title: 'Common Core + Institutional Customisation',
    subtitle: 'Our UMS-ERP Deployment Model',
    category: 'Deployment Model',
    component: Slide13_DeploymentModel,
    notes: `DEPLOYMENT MODEL:
• Two-Tier Strategy: Standardised Common UMS-ERP Core + Institution-Specific Customisation Layer for 10 Anchor Universities.
• Architecture Integrity: Core architecture remains untouched while tailoring workflows to specific university needs.`
  },

  /* ========================================================================= */
  /* OFFERING 03: AMS */
  /* ========================================================================= */
  {
    id: 'slide-11',
    number: '11',
    title: 'Admission Management System (AMS)',
    subtitle: 'Our Offering 03 of 05',
    category: 'Flagship Module 03',
    component: Slide14_AMS,
    notes: `AMS TALKING POINTS (OFFERING 03):
• 8 Applicant Lifecycle Steps: Online Application → Document Upload → Fee Payment → Eligibility Screening → Admit Card → Exam & Merit List → Seat Allocation → UMS-ERP Sync.
• High-Throughput Capacity: "A million applicants. Zero friction." Designed for peak seasonal load.`
  },

  /* ========================================================================= */
  /* OFFERING 04: NEXUS */
  /* ========================================================================= */
  {
    id: 'slide-12',
    number: '12',
    title: 'Nexus — National Matchmaking Hub',
    subtitle: 'Our Offering 04 of 05',
    category: 'Flagship Module 04',
    component: Slide7_Nexus,
    notes: `NEXUS TALKING POINTS (OFFERING 04):
• 4 Worlds Connected: Students (Talent), Faculty (Mentorship), Universities (Research Capacity), Industry (Demand & Funding).
• Unlocked Opportunities: Internship Matching, Faculty Exchange, Technology Transfer, Project Funding, Industry Collaboration.
• SLA: Supported by a 24-hour helpdesk resolving 95% of queries.`
  },
  {
    id: 'slide-13',
    number: '13',
    title: 'Nation-wide Reach & Ecosystem Initiative',
    subtitle: 'Our Offering 04 · Deep Dive',
    category: 'Ecosystem Initiative',
    component: Slide8_Reach,
    notes: `ADOPTION & OUTREACH STRATEGY:
• Core Message: "An Ecosystem Initiative, Not Application Code."
• 8 Engagement Activities: University Roadshows, Student Ambassadors, Industry Workshops, Idea Fairs, Job Fairs, Awareness Campaigns, Divisional Workshops, National Launch.
• 3 Pillars: Software Built, Hardware Provisioned, Outreach Run.`
  },

  /* ========================================================================= */
  /* OFFERING 05: GMS */
  /* ========================================================================= */
  {
    id: 'slide-14',
    number: '14',
    title: 'Grants Management System (GMS)',
    subtitle: 'Our Offering 05 of 05',
    category: 'Flagship Module 05',
    component: Slide6_GMS,
    notes: `GMS MODULE BREAKDOWN (OFFERING 05):
• 10-Step End-to-End Lifecycle: Online Application → Proposal Submission → Peer Review → Scoring & Approval → Fund Disbursement → Progress Monitoring → Financial Reporting → Output Repository → Audit Trail → Monitoring Dashboard.
• Delivery Approach: Phased rollout over 12–18 months with TTO webinars & 8-division workshops.`
  },

  /* ========================================================================= */
  /* COMMON FOUNDATION, DELIVERY & CONSORTIUM */
  /* ========================================================================= */
  {
    id: 'slide-15',
    number: '15',
    title: 'Our Common Tech Stack Across All Five Platforms',
    subtitle: 'Technology Foundation',
    category: 'Technology Foundation',
    component: Slide15_TechStack,
    notes: `6 FOUNDATION PILLARS:
1. BdREN TIGERfed Single Sign-On
2. Unified API Gateway
3. Fine-Grained Role-Based Access Control (RBAC)
4. Two-Factor Authentication (2FA)
5. Centralised Tamper-Proof Audit Logging
6. Standard Integration Adapters (Payment networks, banks, identity providers)`
  },
  {
    id: 'slide-16',
    number: '16',
    title: 'How We Deliver — Delivery Methodology',
    subtitle: 'Five Phases of Our Delivery',
    category: 'Delivery Methodology',
    component: Slide16_DeliveryMethodology,
    notes: `5-PHASE METHODOLOGY:
• Phase 01: Discovery (Weeks 1–8) — Requirements engineering & mapping.
• Phase 02: Design (Months 2–4) — Architecture, UI/UX, service blueprints.
• Phase 03: Build & Iterate — Core Phase (Two-week sprint cadence, continuous delivery).
• Phase 04: Deploy & Pilot — Phased rollout across anchor universities.
• Phase 05: Operate & Evolve — Multi-year support & long-term commitment.`
  },
  {
    id: 'slide-17',
    number: '17',
    title: 'Indicative Programme Delivery Roadmap',
    subtitle: 'Programme Timeline & Phasing',
    category: 'Delivery Roadmap',
    component: Slide21_ImplementationRoadmap,
    notes: `ROADMAP TALKING POINTS:
• Phased delivery timeline for all 5 platforms across Bangladesh.
• Zero-downtime strategy delivering early wins without operational disruption.`
  },
  {
    id: 'slide-18',
    number: '18',
    title: 'Multi-Disciplinary Enterprise Delivery',
    subtitle: 'Our Delivery Team',
    category: 'Delivery Team',
    component: Slide17_DeliveryTeam,
    notes: `TEAM & DISCIPLINE COMMITMENT:
• 8 Specialised Core Disciplines.
• Committed Roles: Programme Managers, System Architects, Frontend Engineers, SQA, Business Analysts, UI/UX Designers, Backend Engineers, DevOps & SRE.
• 100% Dedicated JV Consortium Team — not a shared bench.`
  },
  {
    id: 'slide-19',
    number: '19',
    title: 'Why Our Consortium.',
    subtitle: 'Why Our Consortium',
    category: 'Consortium Advantage',
    component: Slide18_Consortium,
    notes: `5 CONSORTIUM ADVANTAGES:
1. Domain Depth: Proven track record building enterprise ERPs.
2. Higher-Ed Specialism: UMS, AMS, and Research Grant systems are our core craft.
3. Local Presence: Bangladesh-based team & stakeholder understanding.
4. Long-Term Support: Multi-year commitment in our DNA.
5. Outcome Commitment: SLA measured on adoption, satisfaction & uptime.`
  },
  {
    id: 'slide-20',
    number: '20',
    title: 'A Programme We Co-Own With You',
    subtitle: 'Our Approach',
    category: 'Co-Ownership Model',
    component: Slide19_Approach,
    notes: `4 WORKING PILLARS:
• A: Joint Governance (Shared steering committee & risk register).
• B: Outcome-Driven (SLAs tied to adoption, satisfaction, uptime).
• C: Knowledge Transfer (Empower your internal team, no vendor lock-in).
• D: Long Partnership (Multi-year support built-in).`
  },
  {
    id: 'slide-21',
    number: '21',
    title: 'Post-Go-Live Support & SLA Commitment',
    subtitle: 'Long-Term Sustainability',
    category: 'SLA & Support',
    component: Slide22_SLAModel,
    notes: `SLA & SUSTAINABILITY TALKING POINTS:
• 3 years of post-implementation support & capacity building.
• 99.9% Uptime SLA Guarantee & 24-Hour Query Clearance.`
  },
  {
    id: 'slide-22',
    number: '22',
    title: 'Why Award to Systech × Pakiza Consortium',
    subtitle: 'Executive Summary & Value Proposition',
    category: 'Executive Summary',
    component: Slide23_ExecutiveSummary,
    notes: `EXECUTIVE SUMMARY RECAP:
• 5 Platforms, 1 Identity (BdREN TIGERfed SSO).
• Zero Monolithic Risk via Microservices.
• Standard Core + 10 Anchor University Customisations.
• 100% Dedicated Local Delivery Team.`
  },
  {
    id: 'slide-23',
    number: '23',
    title: 'Let\'s Begin — Recommended Path Forward',
    subtitle: 'Next Steps',
    category: 'Closing & Next Steps',
    component: Slide20_LetsBegin,
    notes: `CLOSING TALKING POINTS:
• Recommended Path Forward: 01 Discovery Call → 02 Technical Demo → 03 Bid Conference → 04 Mobilise.
• Final Pitch: "Systech × Pakiza — let's transform higher education together."`
  }
];
