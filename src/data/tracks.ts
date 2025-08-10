export type TrackSection = {
  title: string;
  type?: "text" | "list" | "code";
  content?: string;
  items?: string[];
};

export type Track = {
  slug: string;
  title: string;
  category?: string;
  summary: string;
  heroImage?: string;
  metaDescription?: string;
  sections: TrackSection[];
};

// Minimal image imports only for existing assets; others can be added later
import aiGreenEconomyImg from "@/assets/tracks/ai-green-economy.jpg";
import aiBlueEconomyImg from "@/assets/tracks/ai-blue-economy.jpg";
import cyberSecurityImg from "@/assets/tracks/cyber-security.jpg";
import smartEducationImg from "@/assets/tracks/smart-education.jpg";
import aiHealthcareImg from "@/assets/tracks/ai-healthcare.jpg";
import openInnovationImg from "@/assets/tracks/open-innovation.jpg";

export const tracks: Record<string, Track> = {
  "llm-document-processing": {
    slug: "llm-document-processing",
    title: "LLM Document Processing System",
    category: "Generative AI",
    summary:
      "Build a system that parses natural language queries and retrieves relevant clauses from large unstructured documents, returning a structured decision with justification.",
    metaDescription:
      "LLM Document Processing: parse queries, semantically search documents, and return decisions with clause references.",
    sections: [
      {
        title: "Objective",
        type: "list",
        items: [
          "Parse and structure the input query (age, procedure, location, policy duration)",
          "Semantically retrieve relevant clauses from PDFs, Word files, and emails",
          "Evaluate and decide approval/payout based on clause logic",
          "Return JSON with decision, amount, and clause-based justification",
        ],
      },
      {
        title: "Requirements",
        type: "list",
        items: [
          "Works with vague or incomplete queries in plain English",
          "Explains decisions by referencing exact clauses",
          "Consistent, interpretable outputs for downstream systems",
        ],
      },
      {
        title: "Applications",
        type: "list",
        items: [
          "Insurance claim processing",
          "Legal compliance and contract review",
          "HR and audit workflows",
        ],
      },
      {
        title: "Sample Query",
        type: "text",
        content:
          '"46M, knee surgery, Pune, 3-month policy"',
      },
      {
        title: "Sample Response",
        type: "code",
        content:
`{
  "decision": "approved",
  "amount": 50000,
  "justification": "Knee surgery is covered under Clause 3.2 of the policy document for policies active for at least 90 days."
}`,
      },
      {
        title: "Focus Areas",
        type: "list",
        items: ["NLP", "Document Analysis", "Semantic Search"],
      },
    ],
  },

  "ai-fullstack-builder": {
    slug: "ai-fullstack-builder",
    title: "AI-Powered Full-Stack Website & Backend Builder",
    category: "No-Code / AI Code Generation",
    summary:
      "An MVP platform for non-technical founders to visually design, generate real frontend/backend code, and deploy full-stack apps with AI.",
    metaDescription:
      "Build a visual AI-assisted platform to design, generate, and deploy full-stack applications end-to-end.",
    sections: [
      {
        title: "The Challenge",
        type: "list",
        items: [
          "Visual canvas or blocks to design UI",
          "Generate production-ready frontend code",
          "Generate backend APIs, DB models, auth",
          "Preview, edit, and deploy the full app",
        ],
      },
      {
        title: "Bonus Features",
        type: "list",
        items: [
          "AI chat assistant for edits",
          "Schema visualizer and logic builder",
          "One-click deployment (Vercel/Render/Supabase)",
          "Upload code snippets -> visual components",
        ],
      },
      {
        title: "Focus Areas",
        type: "list",
        items: ["No-Code Platforms", "AI Code Generation", "Full-Stack Development"],
      },
    ],
  },

  "space-station-object-detection": {
    slug: "space-station-object-detection",
    title: "Space Station: Object Detection with Synthetic Data",
    category: "Computer Vision / Digital Twins",
    summary:
      "Train an object detection model on Duality AI Falcon synthetic data to detect Toolbox, Oxygen Tank, and Fire Extinguisher in challenging conditions.",
    metaDescription:
      "Train robust object detection on synthetic space station data; report mAP, confusion matrix, and failure cases.",
    sections: [
      {
        title: "Objectives",
        type: "list",
        items: [
          "Train a robust detector for space station objects",
          "Evaluate under varied lighting, angles, occlusions",
          "Optimize for accuracy, generalization, and efficiency",
        ],
      },
      {
        title: "Data Overview",
        type: "list",
        items: [
          "Synthetic dataset from FalconEditor",
          "Varied lighting and occlusions",
          "Diverse camera angles/distances",
          "Classes: Toolbox, Oxygen Tank, Fire Extinguisher",
        ],
      },
      {
        title: "Key Deliverables",
        type: "list",
        items: [
          "Trained YOLOv8 model and weights",
          "mAP@0.5, confusion matrix, failure analysis",
          "Report with methodology and results",
        ],
      },
      {
        title: "Bonus",
        type: "list",
        items: [
          "Build an app using the model",
          "Plan to keep the model updated with Falcon",
        ],
      },
    ],
  },

  "ai-phishing-detection": {
    slug: "ai-phishing-detection",
    title: "AI-Driven Phishing Detection for Small Businesses",
    category: "Cybersecurity",
    summary:
      "Detect and prevent phishing in emails, SMS, and social messages using AI with real-time alerts, dashboards, and education.",
    metaDescription:
      "Phishing detection MVP with explanations, alerts, and a management dashboard for small businesses.",
    sections: [
      {
        title: "The Challenge",
        type: "list",
        items: [
          "Analyze messages for phishing indicators with generative AI",
          "Provide real-time alerts with explanations",
          "Dashboard to manage and track threats",
          "AI chatbot for user education",
        ],
      },
      { title: "Bonus", type: "list", items: ["Multilingual support", "Gmail/WhatsApp integrations", "Automated response suggestions"] },
      { title: "Focus Areas", type: "list", items: ["Phishing Detection", "NLP", "Real-Time Analytics", "User Education"] },
    ],
  },

  "secure-remote-auth": {
    slug: "secure-remote-auth",
    title: "Secure Remote Work Authentication System",
    category: "Cybersecurity",
    summary:
      "AI-powered multi-factor authentication with anomaly detection and regulatory compliance for remote access.",
    sections: [
      { title: "The Challenge", type: "list", items: ["MFA with biometrics/behavioral analysis", "Detect anomalous logins", "User-friendly UX", "Compliance with regulations"] },
      { title: "Bonus", type: "list", items: ["Slack/Teams integrations", "Offline auth options", "AI risk scoring"] },
      { title: "Focus Areas", type: "list", items: ["Authentication", "Behavioral Analysis", "Cybersecurity", "Compliance"] },
    ],
  },

  "web3-supply-chain": {
    slug: "web3-supply-chain",
    title: "Decentralized Supply Chain Transparency Platform",
    category: "Web3",
    summary:
      "Use smart contracts to record and verify supply chain data with consumer traceability and AI trust reports.",
    sections: [
      { title: "The Challenge", type: "list", items: ["Record/verify supply chain data on-chain", "Consumer traceability via QR", "AI-generated trust reports", "Immutability & security"] },
      { title: "Bonus", type: "list", items: ["Multilingual UI", "IoT integrations", "Rewards for ethical suppliers"] },
      { title: "Focus Areas", type: "list", items: ["Blockchain", "Smart Contracts", "Transparency", "Generative AI"] },
    ],
  },

  "web3-freelancer-payments": {
    slug: "web3-freelancer-payments",
    title: "Web3-Based Freelancer Payment System",
    category: "Web3",
    summary:
      "Automated escrow payments with smart contracts, AI-generated work agreements, and crypto support.",
    sections: [
      { title: "The Challenge", type: "list", items: ["Smart contract escrow", "AI-generated agreements", "Decentralized dispute resolution", "Crypto payments"] },
      { title: "Bonus", type: "list", items: ["AI disputes", "Multilingual", "Integrations with platforms"] },
      { title: "Focus Areas", type: "list", items: ["Blockchain", "Smart Contracts", "Gig Economy", "Generative AI"] },
    ],
  },

  "telemedicine-access": {
    slug: "telemedicine-access",
    title: "AI-Driven Telemedicine Accessibility Platform",
    category: "HealthTech",
    summary:
      "Interpret symptoms in native languages to provide preliminary diagnoses, care steps, and provider connections.",
    sections: [
      { title: "The Challenge", type: "list", items: ["Multilingual symptom understanding", "Condition suggestions with guidelines", "Connect to providers/teleconsultation", "AI chatbot for follow-ups"] },
      { title: "Bonus", type: "list", items: ["Wearable integration", "Offline mode", "Visual first-aid guides"] },
      { title: "Focus Areas", type: "list", items: ["Telemedicine", "Multilingual AI", "Accessibility", "NLP"] },
    ],
  },

  "med-waste-reduction": {
    slug: "med-waste-reduction",
    title: "Smart Medication Waste Reduction System",
    category: "HealthTech",
    summary:
      "Track medication inventories with vision, send expiry reminders, suggest donation and safe disposal.",
    sections: [
      { title: "The Challenge", type: "list", items: ["Image recognition for meds", "Track expiries with reminders", "Suggest donation options", "Generate disposal guidelines"] },
      { title: "Bonus", type: "list", items: ["Pharmacy DB integrations", "AI storage education", "Gamification"] },
      { title: "Focus Areas", type: "list", items: ["Waste Management", "Vision", "Sustainability", "Engagement"] },
    ],
  },

  "financial-literacy-assistant": {
    slug: "financial-literacy-assistant",
    title: "AI Financial Literacy Assistant for Rural Communities",
    category: "FinTech",
    summary:
      "Personalized financial education in native languages with voice interactions and local product suggestions.",
    sections: [
      { title: "The Challenge", type: "list", items: ["Personalized advice from user context", "Interactive tutorials", "Voice interactions", "Local product suggestions"] },
      { title: "Bonus", type: "list", items: ["Gamified modules", "UPI integration", "Offline mode"] },
      { title: "Focus Areas", type: "list", items: ["Financial Inclusion", "Multilingual AI", "Education", "Voice AI"] },
    ],
  },

  "small-tx-fraud-detection": {
    slug: "small-tx-fraud-detection",
    title: "Fraud Detection for Small-Scale Digital Transactions",
    category: "FinTech",
    summary:
      "Real-time fraud detection for UPI and wallets with explainable alerts and merchant tools.",
    sections: [
      { title: "The Challenge", type: "list", items: ["Analyze patterns with generative AI", "Explain flagged transactions", "Identity verification tools", "Privacy & compliance"] },
      { title: "Bonus", type: "list", items: ["Voice alerts", "UPI/Paytm integrations", "Educational pop-ups"] },
      { title: "Focus Areas", type: "list", items: ["Fraud Detection", "Real-Time Analytics", "Cybersecurity", "Trust"] },
    ],
  },

  "open-innovation": {
    slug: "open-innovation",
    title: "Open Innovation Track",
    category: "Open Track",
    summary:
      "Build any technology-driven solution addressing a real-world problem with potential for impact and scalability.",
    heroImage: openInnovationImg,
    sections: [
      {
        title: "Background",
        type: "text",
        content:
          "Innovation isn’t bound by a single domain. Explore healthcare, environment, education, finance, mobility, space, entertainment, or new fields.",
      },
      {
        title: "The Challenge",
        type: "list",
        items: [
          "Address a clearly defined need or gap",
          "Leverage emerging tech (AI, Blockchain, IoT, XR, Robotics)",
          "Feasible prototype/MVP within the hackathon",
          "Potential for real-world adoption and scalability",
        ],
      },
      {
        title: "Bonus Features",
        type: "list",
        items: [
          "Cross-domain innovation",
          "Sustainability and social impact",
          "Accessibility for differently-abled or low-literacy users",
          "Offline functionality",
          "Open datasets and public APIs",
        ],
      },
      {
        title: "Focus Areas",
        type: "list",
        items: [
          "Healthcare & Wellness",
          "Environment & Sustainability",
          "Education & Skills",
          "FinTech & Inclusion",
          "Smart Cities & Mobility",
          "Cybersecurity & Privacy",
          "Space Tech & Exploration",
          "Media & Entertainment",
        ],
      },
    ],
  },

  // Existing 6 homepage tracks with images for consistency
  "ai-green-economy": {
    slug: "ai-green-economy",
    title: "AI for Green Economy",
    category: "Sustainability",
    summary: "AI-powered solutions to promote sustainability and reduce carbon footprint.",
    heroImage: aiGreenEconomyImg,
    sections: [
      { title: "Overview", type: "text", content: "Create technologies that support green initiatives and environmental conservation." },
    ],
  },
  "ai-blue-economy": {
    slug: "ai-blue-economy",
    title: "AI for Blue Economy",
    category: "Sustainability / Marine Tech",
    summary: "Build AI solutions for marine and ocean technology, protecting oceans and enabling sustainable opportunities.",
    heroImage: aiBlueEconomyImg,
    sections: [{ title: "Overview", type: "text", content: "Protect and enhance ocean ecosystems using AI." }],
  },
  "cyber-security": {
    slug: "cyber-security",
    title: "Cyber Security",
    category: "Security",
    summary: "Innovative cybersecurity solutions to protect digital infrastructure and privacy.",
    heroImage: cyberSecurityImg,
    sections: [{ title: "Overview", type: "text", content: "Build tools that enhance security and resilience." }],
  },
  "smart-education": {
    slug: "smart-education",
    title: "Smart Education System",
    category: "EdTech",
    summary: "Intelligent platforms to enhance learning accessibility and outcomes.",
    heroImage: smartEducationImg,
    sections: [{ title: "Overview", type: "text", content: "AI-powered tools for effective education." }],
  },
  "ai-healthcare": {
    slug: "ai-healthcare",
    title: "AI Smart Healthcare",
    category: "HealthTech",
    summary: "AI-driven solutions to improve patient care and medical processes.",
    heroImage: aiHealthcareImg,
    sections: [{ title: "Overview", type: "text", content: "Make healthcare efficient and accessible with AI." }],
  },
};

export const getTrackBySlug = (slug?: string | null) =>
  slug ? tracks[slug] : undefined;
