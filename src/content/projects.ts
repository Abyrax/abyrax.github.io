export type ProjectCategory = "game" | "tool" | "academic";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status?: string;
  accent: string;
  summary: string;
  tagline: string;
  image?: { src: string; alt: string; width: number; height: number };
  platform?: string;
  stack?: string[];
  idea: string;
  features: { title: string; description: string }[];
  build: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "bothun",
    title: "BØTHUN: Rise of the Lights",
    shortTitle: "BØTHUN",
    category: "game",
    categoryLabel: "Original game",
    status: "In development",
    accent: "#8be4d5",
    summary:
      "A Nordic-inspired action RPG. A story to uncover beneath the northern lights.",
    tagline: "A world beneath the northern lights.",
    image: {
      src: "/projects/bothun.webp",
      alt: "BØTHUN artwork: a warrior raises a hand beneath a turquoise aurora, surrounded by snowy ruins.",
      width: 1518,
      height: 854,
    },
    platform: "PC (target)",
    stack: ["Unreal Engine 5.6", "C++", "Blueprints"],
    idea: "A Nordic-inspired, story-driven action RPG that connects a stylized world with responsive combat. BØTHUN explores a semi-open world through a distinctive low-poly visual language and a narrative foundation developed alongside the game.",
    features: [
      {
        title: "A world with a story",
        description:
          "Nordic inspiration, atmospheric environments, and an accompanying narrative shape the original game IP.",
      },
      {
        title: "Combat and abilities",
        description:
          "Gameplay Ability System, spells, and combat mechanics form the foundation of the gameplay prototype.",
      },
      {
        title: "Responsive opponents",
        description:
          "AI-driven enemies bring encounters into the game's exploration and combat systems.",
      },
    ],
    build:
      "Built in Unreal Engine 5.6 using C++ and Blueprints. Development connects gameplay systems, narrative worldbuilding, prototyping, and milestone planning. The project is in development; no release date or store availability has been announced here.",
    links: [
      {
        label: "Watch the trailer on YouTube",
        href: "https://www.youtube.com/watch?v=xtco38VWWEo",
      },
    ],
  },
  {
    slug: "alkut",
    title: "Project ALKUT",
    shortTitle: "ALKUT",
    category: "game",
    categoryLabel: "Original game",
    status: "Prototype",
    accent: "#ee9d91",
    summary:
      "A cinematic third-person action prototype built around movement, weapons, and impact.",
    tagline: "Motion. Precision. Impact.",
    image: {
      src: "/projects/alkut.webp",
      alt: "Project ALKUT promotional artwork for the cinematic third-person action prototype.",
      width: 1600,
      height: 900,
    },
    stack: ["Unreal Engine 5.5", "Motion Matching"],
    idea: "A level-based third-person action shooter prototype exploring cinematic pacing and precise movement. ALKUT brings weapon systems and AI encounters together within a focused action experience.",
    features: [
      {
        title: "Movement in focus",
        description:
          "Motion Matching supports the prototype's animation and movement systems.",
      },
      {
        title: "Modular weapons",
        description:
          "Modular weapon systems provide a foundation for the action and combat experience.",
      },
      {
        title: "Encounter progression",
        description:
          "AI opponents and loot-based progression mechanics connect the level-based gameplay.",
      },
    ],
    build:
      "Developed in Unreal Engine 5.5. The prototype investigates how animation, weapon systems, and enemy behavior can support a cinematic action experience. It is presented as a prototype, with no commercial release or multiplayer claim.",
    links: [
      {
        label: "Watch the trailer on YouTube",
        href: "https://www.youtube.com/watch?v=jec5iABCXUk",
      },
    ],
  },
  {
    slug: "amelos",
    title: "Project Amelos",
    shortTitle: "Amelos",
    category: "tool",
    categoryLabel: "Creator tool",
    accent: "#aba9ff",
    summary:
      "An exploration of more intuitive level-design workflows inside Unreal Engine.",
    tagline: "Design spaces. Remove friction.",
    idea: "Project Amelos explores software for level designers working in Unreal Engine. Its direction is simple: keep attention on the space being designed and reduce the friction around authoring it.",
    features: [
      {
        title: "Editor-native direction",
        description:
          "Explore a reusable Unreal Editor plugin approach that brings tooling into the designer's existing workflow.",
      },
      {
        title: "Authoring workflows",
        description:
          "Explore ways to reduce repetitive authoring tasks and keep assistance close to the designer's context.",
      },
      {
        title: "A focused exploration",
        description:
          "A potential future direction: AI-assisted organization that supports level design while keeping creative decisions with the designer.",
      },
    ],
    build:
      "The project originated as ProjectAmelos with a proposed Unreal Editor plugin approach. Its direction is to bring workflow support into the editor, with authoring automation and contextual assistance as areas for exploration.",
    links: [],
  },
  {
    slug: "seshat",
    title: "Seshat: Narrative Scriptor",
    shortTitle: "Seshat",
    category: "tool",
    categoryLabel: "Creator tool",
    accent: "#e1c391",
    summary:
      "Desktop creative software for the people connecting characters, places, and stories.",
    tagline: "Every world has a story. Keep it connected.",
    idea: "Seshat: Narrative Scriptor is a desktop creative-software project for writers, worldbuilders, and narrative designers. Its purpose is to organize interconnected fictional universes and the planning work behind them.",
    features: [
      {
        title: "The elements of a world",
        description:
          "The product direction connects characters, locations, events, and lore within a structured planning workflow.",
      },
      {
        title: "Connections across stories",
        description:
          "Explore maps, timelines, relationship graphs, and visual planning as ways to keep a fictional universe coherent.",
      },
      {
        title: "Thoughtful assistance",
        description:
          "Future exploration: narrative consistency assistance and contextual writing support.",
      },
    ],
    build:
      "Seshat explores a desktop environment for connected worldbuilding. Its direction brings narrative planning into one workspace, with maps, timelines, and relationships as areas of exploration. Public availability has not been announced here.",
    links: [],
  },
  {
    slug: "knight-of-the-alliance",
    title: "Knight of the Alliance",
    shortTitle: "Knight of the Alliance",
    category: "academic",
    categoryLabel: "Academic project",
    accent: "#c8bfa8",
    summary:
      "An award-winning university RPG where medieval fantasy met conversational AI.",
    tagline: "Where medieval fantasy met conversational AI.",
    image: {
      src: "/projects/knight.webp",
      alt: "Knight of the Alliance promotional artwork for the medieval-themed Bilkent University role-playing project.",
      width: 1600,
      height: 1012,
    },
    stack: ["Unreal Engine 5", "C++", "Blueprints"],
    idea: "A university senior project reimagining Bilkent University as a medieval role-playing world. Players interact with ChatGPT-integrated NPCs as part of the experience. Knight of the Alliance belongs to the founder's academic background, rather than the studio's current commercial titles.",
    features: [
      {
        title: "A familiar place, reimagined",
        description:
          "A medieval interpretation of Bilkent University provides the setting for an interactive role-playing experience.",
      },
      {
        title: "Conversational characters",
        description:
          "ChatGPT-integrated NPC conversations were part of the academic project's gameplay.",
      },
      {
        title: "Recognized as a team",
        description:
          "The project team received 1st Ranking Team / Best Senior Project at CTIS Awards 2024, recognized by Bilkent University in consultation with Havelsan.",
      },
    ],
    build:
      "Developed in Unreal Engine 5, with public C++ source available on GitHub. The project provided a foundation in gameplay engineering and interactive narrative. The CTIS recognition is attributed to the academic project team, not to a commercial studio release.",
    links: [
      {
        label: "Explore the source on GitHub",
        href: "https://github.com/Abyrax/UE5-SeniorProject-KnightOfTheAlliance",
      },
    ],
  },
];

export const email = "contact@abyrax.com";
export const projectPath = (project: Project) => `/projects/${project.slug}/`;
