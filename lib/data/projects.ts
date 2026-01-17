export interface Project {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    tagline: string;
    category: string;
    liveUrl?: string;
    githubUrl?: string;
    coverImage?: any; // Keeping this for type compatibility, though we might not use it or use local paths
    technologies: {
        name: string;
        category?: string;
        color?: string;
    }[];
    featured: boolean;
    order: number;
}

export const PROJECTS: Project[] = [
    {
        _id: "proj-1",
        title: "Reservas Verona",
        slug: { current: "reservas-verona" },
        tagline: "Amenity reservation webapp for residential communities",
        category: "web-app",
        liveUrl: "https://reservas-verona.vercel.app/",
        technologies: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Vercel" },
        ],
        featured: true,
        order: 1,
    },
    {
        _id: "proj-2",
        title: "Pausa",
        slug: { current: "pausa-app" },
        tagline: "Mental health and sobriety support webapp",
        category: "web-app",
        liveUrl: "https://pausa-beta.vercel.app/",
        technologies: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Vercel" },
        ],
        featured: true,
        order: 2,
    },
    {
        _id: "proj-3",
        title: "Servicios Creativos",
        slug: { current: "servicios-creativos" },
        tagline: "Creative agency website with modern design",
        category: "web-app",
        liveUrl: "https://www.servicioscreativos.online/",
        technologies: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
        ],
        featured: true,
        order: 3,
    },
    {
        _id: "proj-4",
        title: "Artist The Way",
        slug: { current: "artist-the-way" },
        tagline: "Digital art e-commerce platform",
        category: "web-app",
        liveUrl: "https://artistheway.vercel.app/",
        technologies: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Vercel" },
        ],
        featured: true,
        order: 4,
    },
    {
        _id: "proj-5",
        title: "Vista Campo",
        slug: { current: "vista-campo" },
        tagline: "Rehab center website redesign",
        category: "web-app",
        liveUrl: "https://vistacampo-redesign-4r.vercel.app/es/",
        technologies: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Vercel" },
        ],
        featured: true,
        order: 5,
    },
    {
        _id: "proj-6",
        title: "Kawsay Coffee",
        slug: { current: "kawsay-coffee" },
        tagline: "Premium coffee e-commerce experience",
        category: "web-app",
        liveUrl: "https://kawsay.vercel.app/",
        technologies: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Vercel" },
        ],
        featured: true,
        order: 6,
    },
];
