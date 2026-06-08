export interface SectionWithBullets {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  bullets: string[];
}

export interface CardItem {
  title: string;
  description: string;
  color: string; // Theme color (forest, cyan, navy, orange, brown, gray)
  iconName: string;
}

export const LEEDS_HERO = {
  title: "Accelerating Social Mobility through Place-Based Change",
  region: "Leeds and West Yorkshire",
  paragraphs: [
    "Yorkshire is a place of ambition, enterprise, civic energy and growth. Across Leeds, Bradford, Sheffield and neighbouring areas, there are already businesses, charities, schools, colleges, universities, funders, civic leaders and community organisations working hard to improve opportunity for young people.",
    "But the challenge is that this work is not always visible, connected or easy to navigate.",
    "This project is about bringing ecosystem players together to understand what is already happening, where there are gaps or missed connections, and what else needs to happen to ensure young people can see, access and move towards opportunity.",
    "This is not about duplication.",
    "It is about collaboration, amplification and collective action.",
    "Our ambition is to build a clearer picture of the regional opportunity ecosystem, strengthen connections between partners, and identify practical ways to help young people move from aspiration to action."
  ]
};

export const LEEDS_WHY_MATTERS: SectionWithBullets = {
  title: "Why this work matters",
  paragraphs: [
    "Young people do not experience opportunity through one organisation, one programme or one moment in time. Their journeys are shaped by family, school, community, confidence, networks, place, employers, role models and access to information.",
    "There is significant activity already taking place. But without a shared view of the ecosystem, it can be difficult to see:"
  ],
  bullets: [
    "what support already exists",
    "who it reaches",
    "where the gaps are",
    "where young people lose connection",
    "where employers can add most value",
    "where collaboration could make existing work go further"
  ]
};

export const LEEDS_AMBITION: SectionWithBullets = {
  title: "Our ambition",
  paragraphs: [
    "We want to help create a regional ecosystem where young people can see what is possible, understand the routes available to them, and access the relationships, experiences and support they need to move forward.",
    "This means bringing together:"
  ],
  bullets: [
    "Businesses and employers",
    "Schools, colleges and universities",
    "Charities and youth organisations",
    "Community groups",
    "Funders and investors",
    "Local and regional government",
    "Young people and families",
    "Existing place-based initiatives and networks"
  ]
};

export const LEEDS_UNDERSTAND: CardItem[] = [
  {
    title: "What is already happening",
    description: "Which organisations, programmes, networks and initiatives are already supporting young people across Leeds, Bradford, Sheffield and the wider region?",
    color: "forest",
    iconName: "Search"
  },
  {
    title: "Where activity is connected",
    description: "Where are there strong examples of collaboration, partnership and shared delivery that could be amplified or replicated?",
    color: "cyan",
    iconName: "Link"
  },
  {
    title: "Where the gaps are",
    description: "Where are young people still missing out on support, visibility, confidence, networks or pathways into opportunity?",
    color: "orange",
    iconName: "Compass"
  },
  {
    title: "Where handoffs are weak",
    description: "Where do young people lose momentum as they move between school, further education, training, employment or other support?",
    color: "navy",
    iconName: "GitCommit"
  },
  {
    title: "Where employers can contribute",
    description: "How can businesses support future talent, social value, mentoring, work experience, skills, confidence and visible career pathways?",
    color: "brown",
    iconName: "Briefcase"
  },
  {
    title: "What young people need",
    description: "What do young people themselves say would help them understand and access opportunity in their place?",
    color: "gray",
    iconName: "MessageCircle"
  }
];

export const LEEDS_HOW_WE_WORK = {
  title: "How we will work",
  subtitle: "This project will be built around collaboration, not duplication.",
  paragraphs: [
    "We will listen to the people and organisations already doing the work, understand where energy and activity already exists, and identify where a shared place-based approach could strengthen impact."
  ],
  bullets: [
    "Ecosystem mapping",
    "Partner conversations",
    "Youth-led insight",
    "School and employer engagement",
    "Design-led workshops",
    "Identification of gaps and opportunities",
    "Practical pilot shaping",
    "Storytelling and shared learning"
  ]
};

export const LEEDS_ROLE = {
  title: "The role of Leeds",
  paragraphs: [
    "Leeds provides a strong starting point for this work. It has a major employer base, strong civic leadership, significant education and skills assets, and a growing network of organisations focused on social mobility, inclusion and opportunity.",
    "But young people’s lives, communities and future pathways do not stop at city boundaries.",
    "That is why this project will also look across South and West Yorkshire and connected regional economies, including Bradford, Sheffield and other neighbouring places, to understand how opportunity flows across the wider ecosystem.",
    "The ambition is to build something rooted in place, but connected across the region."
  ]
};

export const LEEDS_WHO_INVOLVED: CardItem[] = [
  {
    title: "Employers",
    description: "To share future skills needs, open up pathways, offer insight, provide role models and help young people understand the world of work.",
    color: "navy",
    iconName: "Building2"
  },
  {
    title: "Schools, colleges and universities",
    description: "To help connect young people to opportunity early, practically and meaningfully.",
    color: "cyan",
    iconName: "GraduationCap"
  },
  {
    title: "Charities and youth organisations",
    description: "To bring trusted relationships, lived experience and insight into the barriers young people face.",
    color: "forest",
    iconName: "Heart"
  },
  {
    title: "Community organisations",
    description: "To ensure the work is grounded in place, relationships and the realities of young people’s lives.",
    color: "orange",
    iconName: "Users"
  },
  {
    title: "Civic and public sector partners",
    description: "To align the work with local and regional priorities, strategies and existing infrastructure.",
    color: "brown",
    iconName: "Landmark"
  },
  {
    title: "Funders and investors",
    description: "To support practical action, shared infrastructure and solutions that can create lasting impact.",
    color: "gray",
    iconName: "BadgeDollarSign"
  },
  {
    title: "Young people",
    description: "To shape the work around real experiences, real barriers and real ambition.",
    color: "forest",
    iconName: "Sparkles"
  }
];

export const LEEDS_SUCCESS = {
  title: "What success could look like",
  subtitle: "By working together, we want to create:",
  bullets: [
    "a clearer map of the social mobility and opportunity ecosystem",
    "stronger relationships between partners",
    "better visibility of what already exists",
    "a shared understanding of gaps and duplication risks",
    "practical opportunities for collaboration",
    "youth-led insight into what needs to change",
    "clearer employer pathways into local opportunity",
    "pilot ideas that can be tested and developed",
    "a stronger regional story of collective action"
  ],
  closing: [
    "This is about making existing work more visible, connected and impactful.",
    "It is about helping partners see where they fit, where they can add value, and how collaboration can create more meaningful pathways for young people."
  ]
};

export const LEEDS_BE_PART = {
  title: "Be part of the project",
  subtitle: "We are inviting partners across Leeds, Bradford, Sheffield and the wider region to help shape this work.",
  prompt: "You can support by:",
  bullets: [
    "sharing what your organisation is already doing",
    "connecting us to schools, colleges, youth organisations or community groups",
    "joining a working group or design session",
    "supporting youth-led conversations",
    "offering employer insight, mentoring or workplace experiences",
    "helping identify gaps in the current ecosystem",
    "supporting practical pilots or shared infrastructure"
  ],
  closing: "This work will only succeed if it is built collectively. Together, we can turn regional ambition into visible opportunity for young people."
};
