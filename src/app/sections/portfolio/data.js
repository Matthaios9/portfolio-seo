const data = [
  {
    id: 1,
    title: "Active Directory GPO Hardening",
    category: "Cybersecurity",
    description:
      "Applied Center for Internet Security (CIS) benchmarks to Active Directory domain controllers via Group Policy Objects (GPOs), disabling legacy SMBv1 protocols and enforcing strict PowerShell logging.",
    projectLink: null,
    githubLink: "https://github.com/eladshamir/Internal-Network-PG",
    imageId:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=150&fit=crop",
    createdAt: "2024-01-15T13:45:09.758Z",
  },
  {
    id: 2,
    title: "Secure Node.js & JWT Authentication API",
    category: "Cybersecurity",
    description:
      "Built a production-ready REST API using Express.js and MongoDB. Implemented JSON Web Token (JWT) authorization, Bcrypt password hashing, and input validation to protect against injection attacks.",
    projectLink: null,
    githubLink: "https://github.com/expressjs/express",
    imageId:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&h=150&fit=crop",
    createdAt: "2024-01-15T13:46:58.058Z",
  },
  {
    id: 3,
    title: "Phishing Header & Malware YARA Analysis",
    category: "Cybersecurity",
    description:
      "Analyzed malicious email headers and raw attachments. Extracted command-and-control (C2) domain IOCs and created automated CyberChef recipes and YARA detection rules to flag threat patterns.",
    projectLink: null,
    githubLink: "https://github.com/Yara-Rules/rules",
    imageId:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=150&fit=crop",
    createdAt: "2024-01-15T13:48:47.597Z",
  },
  {
    id: 4,
    title: "SOC Log Analysis & Incident Response Lab",
    category: "Cybersecurity",
    description:
      "Built a local SOC lab ingesting Windows Sysmon events into Splunk. Simulated brute-force attacks and privilege escalation using Atomic Red Team, documenting custom alert correlation rules and investigation playbooks.",
    projectLink: null,
    githubLink: "https://github.com/clarktyler/detection-lab",
    imageId:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=300&h=150&fit=crop",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
];

export default data;
