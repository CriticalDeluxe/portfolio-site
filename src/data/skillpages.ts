import type { Skill } from "./skills";

export type GalleryItem = {
    src: string;      // path under /public
    alt: string;
    caption?: string;
};

export type SkillPage = {
    title?: string;   // optional override
    lede: string;
    steps: { title: string; text: string }[];
    gallery?: GalleryItem[];
};

export const skillPages: Record<Skill["slug"], SkillPage> = {
    "3d-printing": {
        lede:
            "My process for designing, printing, finishing, and packaging small minis — aiming for reliable results and a clean final look.",
        steps: [
            { title: "Concept & constraints", text: "Pick a theme, define size limits, and decide what must read at miniature scale." },
            { title: "Modeling", text: "Block out forms, refine silhouette, and prep clean geometry for printing." },
            { title: "Test prints", text: "Print fast drafts to catch weak spots, overhang issues, and lost details." },
            { title: "Iterate", text: "Adjust thickness, tolerances, and surfaces until results are consistent." },
            { title: "Finish", text: "Remove supports, sand where needed, and prep the surface for paint/seal." },
            { title: "Paint & seal", text: "Hand-paint details, then seal for durability and consistent sheen." },
            { title: "Packaging", text: "Choose the presentation format and prep for shipping." }
        ],
        gallery: [
            { src: "/gallery/3d-printing/example-1.jpg", alt: "3D printed mini example 1", caption: "Example design — add real name later" },
            { src: "/gallery/3d-printing/example-2.jpg", alt: "3D printed mini example 2", caption: "Example design — add real name later" }
        ]
    },

    // Add more later. Leave them out until ready, or add “coming soon” content.
    "game-art": {
        lede: "Pixel art backgrounds, UI, and visual systems. (Page in progress.)",
        steps: [{ title: "Coming soon", text: "I’ll break down my workflow here next." }]
    },

    "programming": {
        lede: "Tools, prototypes, and gameplay systems. (Page in progress.)",
        steps: [{ title: "Coming soon", text: "I’ll document projects and patterns here." }]
    },

    "fiber-arts": {
        lede: "Crochet and craft—patterns, structure, iteration. (Page in progress.)",
        steps: [{ title: "Coming soon", text: "I’ll add process notes and examples here." }]
    },

    "japanese": {
        lede: "Reflections on becoming fluent in a non-romance language. (Page in progress.)",
        steps: [{ title: "Coming soon", text: "I’ll add process notes and examples here." }]
    }
};