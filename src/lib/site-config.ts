export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
  badge?: string;
  reportHref?: string;
};

export const siteConfig = {
  name: "Cormac Greaney",
  initials: "CG",
  title: "Cormac Greaney — Computer Science & ML",
  description:
    "Portfolio of Cormac Greaney — MSc student in Machine Learning & AI at the University of Limerick, with a First Class Honours BSc in Computer Systems.",
  url: "https://cormacgreaney.com",
  email: "cormacgreaney17@gmail.com",
  location: "Limerick, Ireland",
  role: "MSc Student · AI & Machine Learning",
  tagline:
    "Building across web development, machine learning, and systems - from evolved game strategies to full-stack apps and deep learning.",
  social: {
    github: "https://github.com/cormacgreaney",
    linkedin: "https://linkedin.com/in/cormac-greaney-46277425a",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    heading: "Building with purpose",
    description:
      "Computer systems graduate and MSc student with hands-on experience across web development, machine learning, and low-level systems.",
    paragraphs: [
      "I recently completed my BSc in Computer Systems at the University of Limerick, graduating with First Class Honours. My undergraduate work spanned full-stack web development, architecture design, SRS development, software testing, compiler construction, artificial intelligence, machine learning, deep learning, evolutionary algorithms, and more including a final-year project on evolving game-playing strategies with Grammatical Evolution.",
      "I'm now pursuing an MSc in Artificial Intelligence and Machine Learning at UL, deepening my work in data-driven systems while continuing to build practical software - from neural networks and computer vision to modern web applications.",
      "I'm especially interested in the intersection of intelligent systems and real-world software: building things that are technically rigorous, well engineered, and useful.",
    ],
  },
  projects: [
    {
      title: "EvoDraughts",
      description:
        "BSc final-year project using Grammatical Evolution (GRAPE) to evolve draughts-playing strategies as grammar-constrained symbolic expressions, with a custom game engine, evaluation pipeline, and Flask web app for human vs. evolved play.",
      tags: ["Python", "Grammatical Evolution", "Flask", "JavaScript"],
      href: "https://github.com/cormacGreaney/EvoDraughts",
      reportHref: "/CS_Report_GreaneyCormac_22352228.pdf",
      featured: true,
      badge: "BSc Final Year Project",
    },
    {
      title: "Cheer's N Beer's",
      description:
        "Full-stack party-planning marketplace connecting customers and service providers - with separate dashboards, booking flows, messaging, reviews, and admin tooling. Built for CS4116 Software Engineering.",
      tags: ["PHP", "HTML", "CSS", "MySQL"],
      href: "https://github.com/cormacGreaney/cs4116-cheers-n-beers",
    },
    {
      title: "JIBUC Parser & Lexer",
      description:
        "Lexer and parser for the JIBUC language using Flex and Bison, with structural analysis and semantic checks. Built for CS4158 with gcc and Make.",
      tags: ["C", "Flex", "Bison", "Make"],
      href: "https://github.com/cormacGreaney/JIBUC-Parser-and-associated-Lexical-analysis",
    },
    {
      title: "Pet Image Segmentation",
      description:
        "Image segmentation with a VGG16-based U-Net on the Oxford-IIIT Pet Dataset. Built for CS4287 Neural Computing - training, evaluation, and analysis in Jupyter.",
      tags: ["Python", "TensorFlow", "CNNs", "Jupyter"],
      href: "https://github.com/cormacGreaney/Image-Segmentation-using-a-VGG16-based-U-Net-Architecture-on-the-Oxford-IIIT-Pet-Dataset-",
    },
    {
      title: "QuizLive",
      description:
        "Real-time quiz platform built with a microservice architecture for CS4297 - API gateway, auth (Google OAuth + JWT), quiz management, WebSocket realtime service, and a React frontend, containerised with Docker Compose.",
      tags: ["Java", "TypeScript", "React", "Docker"],
      href: "https://github.com/cormacGreaney/QuizLive",
    },
    {
      title: "Spotify Track Popularity",
      description:
        "Data mining project on the Spotify tracks2026 dataset - exploratory analysis, k-means and DBSCAN clustering, and predictive modelling with scikit-learn pipelines for classification and regression on track popularity. Built for CS4168.",
      tags: ["Python", "scikit-learn", "Pandas", "Jupyter"],
      href: "https://github.com/cormacGreaney/Predictive-Modelling-on-Spotify-tracks2026-Dataset",
    },
    {
      title: "DQN for Atari Pong",
      description:
        "Deep Q-Network implementation for Atari Pong using Gymnasium and the Arcade Learning Environment. CS4287 Neural Computing project - training, evaluation, and gameplay analysis in Jupyter.",
      tags: ["Python", "PyTorch", "Reinforcement Learning", "Gymnasium"],
      href: "https://github.com/cormacGreaney/Implementing-a-Deep-Q-Network-for-Atari-Pong-Using-Gymnasium-and-ALE",
    },
    {
      title: "US Capitol - 3D Model",
      description:
        "Detailed 3D model of the US Capitol building created in Autodesk 3ds Max as a modelling and visualisation project.",
      tags: ["3ds Max", "3D Modelling"],
      href: "#",
    },
  ] satisfies Project[],
  skills: [
    "Web Development",
    "Full-Stack Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "Reinforcement Learning",
    "Data Mining",
    "Computer Vision",
    "Neural Networks",
    "Evolutionary Algorithms",
    "Grammatical Evolution",
    "Software Engineering",
    "System Architecture",
    "Microservices",
    "Software Testing",
    "Compiler Construction",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C",
    "PHP",
    "HTML & CSS",
    "React",
    "Next.js",
    "Flask",
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "Pandas",
    "Tailwind CSS",
    "MySQL",
    "Docker",
    "OAuth & JWT",
    "WebSockets",
    "Flex & Bison",
    "Make",
    "Jupyter",
    "CNNs",
    "Image Segmentation",
    "Deep Q-Networks",
    "3D Modelling",
    "3ds Max",
    "Git",
    "Linux",
  ],
} as const;
