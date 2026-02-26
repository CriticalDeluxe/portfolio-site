export type Skill = {
    title: string;
    slug: string;      // used to build the URL
    icon: string;      // path under /public
    blurb?: string;    // optional short description later
};

export const skills: Skill[] = [
    {
        title: "3D Printed Design",
        slug: "3d-printing",
        icon: "/icons/3d-print.svg",
        blurb: "From concept → model → print → finish → packaging."
    },
    {
        title: "Character Models",
        slug: "game-art",
        icon: "/icons/game-art.svg",
        blurb: "Pixel art backgrounds, UI, and visual systems."
    },
    {
        title: "Music",
        slug: "music",
        icon: "/icons/music.svg",
        blurb: "Tools, prototypes, and gameplay systems."
    },
    {
        title: "Fiber Arts",
        slug: "fiber-arts",
        icon: "/icons/fiber-arts.svg",
        blurb: "Crochet and craft—patterns, structure, iteration."
    },
    {
        title: "Japanese Fluency",
        slug: "japanese",
        icon: "/icons/japanese.svg",
        blurb: "Reflections on becoming fluent in a non-romance language."
    },
    {
        title: "Game Design",
        slug: "game-design",
        icon: "/icons/game-design.svg",
        blurb: "Designing systems, mechanics, and player experiences."
    },
    {
        title: "Coding",
        slug: "coding",
        icon: "/icons/coding.svg",
        blurb: "Writing and maintaining code for software projects."
    },
    {
        title: "Inspirations",
        slug: "inspirations",
        icon: "/icons/inspirations.svg",
        blurb: "Favorite media and creative influences."
    },
    {
        title: "Aspirations",
        slug: "aspirations",
        icon: "/icons/aspirations.svg",
        blurb: "My goals and dreams for the future."
    }
];