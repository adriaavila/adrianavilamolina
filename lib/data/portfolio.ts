
export const portfolioData = {
    profile: {
        firstName: "Adrian",
        lastName: "Avila Molina",
        headline: "Vibecoding My Way to Freedom",
        headlineStaticText: "A journal about",
        headlineAnimatedWords: [
            "vibecoding",
            "making money",
            "creating freedom",
            "living fully"
        ],
        headlineAnimationDuration: 3000,
        shortBio: "Full-Stack Developer, Business Intelligence Developer, and Data Analyst with 3+ years of experience. I build high-leverage B2B solutions and AI-driven products, optimizing systems for revenue and scalability.",
        email: "avilamolinaadrian@gmail.com",
        phone: "+584220023684",
        location: "Venezuela | Remote-Friendly",
        fullBio: [
            {
                _key: "1",
                _type: "block",
                children: [
                    {
                        _key: "1a",
                        _type: "span",
                        text: "I build high-leverage B2B solutions and AI-driven products. With 3+ years of experience and a background in Industrial Engineering, my focus is not just on writing code, but on optimizing systems for revenue and scalability. I specialize in taking ideas from zero to MVP in weeks, using a modern stack (Next.js, Vercel, React.js) and AI automation (n8n).",
                        marks: []
                    }
                ],
                markDefs: [],
                style: "normal"
            },
            {
                _key: "2",
                _type: "block",
                children: [
                    {
                        _key: "2a",
                        _type: "span",
                        text: "Core Focus:",
                        marks: ["strong"]
                    }
                ],
                markDefs: [],
                style: "normal"
            },
            {
                _key: "3",
                _type: "block",
                children: [
                    {
                        _key: "3a",
                        _type: "span",
                        text: "Rapid Prototyping: Turning complex business logic into functional, revenue-ready MVPs.",
                        marks: []
                    }
                ],
                markDefs: [],
                style: "normal",
                listItem: "bullet"
            },
            {
                _key: "4",
                _type: "block",
                children: [
                    {
                        _key: "4a",
                        _type: "span",
                        text: "AI Implementation: Integrating LLMs and automation to replace manual workflows.",
                        marks: []
                    }
                ],
                markDefs: [],
                style: "normal",
                listItem: "bullet"
            },
            {
                _key: "5",
                _type: "block",
                children: [
                    {
                        _key: "5a",
                        _type: "span",
                        text: "Business Optimization: Leveraging my engineering background to build lean, scalable solutions that minimize cost and time and maximize leverage.",
                        marks: []
                    }
                ],
                markDefs: [],
                style: "normal",
                listItem: "bullet"
            },
            {
                _key: "6",
                _type: "block",
                children: [
                    {
                        _key: "6a",
                        _type: "span",
                        text: "Currently scaling ALLOK LLC and building niche SaaS solutions for the LATAM and US markets.",
                        marks: []
                    }
                ],
                markDefs: [],
                style: "normal"
            }
        ],
        socialLinks: {
            github: "https://github.com/adrianavilamolina",
            linkedin: "https://linkedin.com/in/adrianavilamolina",
            twitter: null,
            website: "https://adrianavilamolina.com"
        },
        profileImage: "/images/profile-image.jpg"
    },
    experience: [
        {
            _id: "exp-1",
            jobTitle: "Business Intelligence Consultant (Freelance)",
            company: "Remote",
            startDate: "2022-01-01",
            endDate: null, // Present
            isCurrentRole: true,
            description: [
                "Designed and implemented interactive dashboards (Power BI, Google Data Studio, Notion) to monitor KPIs such as marketing performance, sales funnels, and customer behavior.",
                "Developed data pipelines integrating Google Analytics, Search Console, and Sheets to automate reporting and reduce manual work.",
                "Delivered data-driven insights for small businesses, enabling growth strategies based on measurable metrics.",
                "Supported digital teams with BI-driven SEO and web analytics to improve visibility and user engagement."
            ]
        },
        {
            _id: "exp-2",
            jobTitle: "Data Analyst & Automation Specialist",
            company: "SAMER (Construction)",
            startDate: "2019-01-01",
            endDate: "2022-12-31",
            isCurrentRole: false,
            description: [
                "Built KPI dashboards to track procurement, project performance, and financial metrics.",
                "Automated reporting workflows using Power BI, Google Sheets, and AppSheet, reducing reporting time by 40%.",
                "Analyzed operational data to identify cost-saving opportunities and optimize processes across multiple departments."
            ]
        },
        {
            _id: "exp-3",
            jobTitle: "Junior Engineer Intern",
            company: "SICOMAC (Ceramic Manufacturing)",
            startDate: "2018-01-01",
            endDate: "2018-12-31",
            isCurrentRole: false,
            description: [
                "Implemented OEE (Overall Equipment Effectiveness) tracking system on production lines.",
                "Automated collection and visualization of production data for real-time monitoring.",
                "Improved decision-making visibility by enabling managers to act on live plant performance data."
            ]
        }
    ],
    education: [
        {
            _id: "edu-1",
            degree: "Industrial Engineering",
            institution: "Universidad Nacional de Córdoba (UNC)",
            startDate: "2012-01-01",
            endDate: "2020-12-31"
        },
        {
            _id: "edu-2",
            degree: "Diploma in Digital Business",
            institution: "Universidad Católica Argentina (UCA), Buenos Aires",
            startDate: "2021-01-01",
            endDate: "2022-12-31"
        }
    ],
    projects: [
        {
            _id: "proj-1",
            title: "Reservas Verona",
            slug: { current: "reservas-verona" },
            tagline: "Amenity reservation webapp for residential communities",
            description: "Amenity reservation webapp for residential communities",
            liveUrl: "https://reservas-verona.vercel.app/",
            featured: true,
            image: "/images/projects/reservas-verona.png",
            technologies: ["React", "Next.js", "TypeScript", "Vercel"]
        },
        {
            _id: "proj-2",
            title: "Pausa",
            slug: { current: "pausa-app" },
            tagline: "Mental health and sobriety support webapp",
            description: "Mental health and sobriety support webapp",
            liveUrl: "https://pausa-beta.vercel.app/",
            featured: true,
            image: "/images/projects/pausa-app.png",
            technologies: ["React", "Next.js", "TypeScript", "Vercel"]
        },
        {
            _id: "proj-4",
            title: "Artist The Way",
            slug: { current: "artist-the-way" },
            tagline: "Digital art e-commerce platform",
            description: "Digital art e-commerce platform",
            liveUrl: "https://artistheway.vercel.app/",
            featured: true,
            image: "/images/projects/artist-the-way.png",
            technologies: ["React", "Next.js", "TypeScript", "Vercel"]
        },
        {
            _id: "proj-5",
            title: "Vista Campo",
            slug: { current: "vista-campo" },
            tagline: "Rehab center website redesign",
            description: "Rehab center website redesign",
            liveUrl: "https://vistacampo-redesign-4r.vercel.app/es/",
            featured: true,
            image: "/images/projects/vista-campo.png",
            technologies: ["React", "Next.js", "TypeScript", "Vercel"]
        },
        {
            _id: "proj-6",
            title: "Kawsay Coffee",
            slug: { current: "kawsay-coffee" },
            tagline: "Premium coffee e-commerce experience",
            description: "Premium coffee e-commerce experience",
            liveUrl: "https://kawsay.vercel.app/",
            featured: true,
            image: "/images/projects/kawsay-coffee.png",
            technologies: ["React", "Next.js", "TypeScript", "Vercel"]
        }
    ],
    skills: [
        { name: "Power BI", category: "BI & Data", proficiency: "Expert", percentage: 90, yearsOfExperience: 3, color: "blue" },
        { name: "KPI Design", category: "BI & Data", proficiency: "Expert", percentage: 90, yearsOfExperience: 3, color: "green" },
        { name: "Data Pipelines", category: "BI & Data", proficiency: "Advanced", percentage: 85, yearsOfExperience: 3, color: "purple" },
        { name: "Google Analytics", category: "Analytics", proficiency: "Advanced", percentage: 85, yearsOfExperience: 3, color: "orange" },
        { name: "Next.js", category: "Web & Frontend", proficiency: "Intermediate", percentage: 75, yearsOfExperience: 2, color: "black" },
        { name: "React", category: "Web & Frontend", proficiency: "Intermediate", percentage: 75, yearsOfExperience: 2, color: "cyan" },
        { name: "Tailwind CSS", category: "Web & Frontend", proficiency: "Advanced", percentage: 85, yearsOfExperience: 2, color: "sky" },
        { name: "Excel & Sheets", category: "Productivity", proficiency: "Expert", percentage: 95, yearsOfExperience: 5, color: "green" },
        { name: "AppSheet", category: "Productivity", proficiency: "Advanced", percentage: 80, yearsOfExperience: 3, color: "blue" },
        { name: "Notion", category: "Productivity", proficiency: "Advanced", percentage: 85, yearsOfExperience: 3, color: "black" }
    ],
    blog: [
        {
            _id: "blog-1",
            title: "Vibecoding: A New Way to Live",
            slug: { current: "vibecoding-a-new-way-to-live" },
            excerpt: "It's not just about code. It's about the energy you bring to the creation. Here is how I'm turning my flow state into a living.",
            category: "Philosophy",
            tags: ["Vibecoding", "Lifestyle", "Flow State"],
            publishedAt: "2026-01-20T10:00:00Z",
            readTime: 5,
            featuredImage: null,
            content: [
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "We've been taught that coding is a logical, purely left-brained activity. You sit down, you write functions, you debug, you commit. But for me, and for a growing movement of creators, it's something more. It's " },
                        { _type: "span", marks: ["strong"], text: "Vibecoding" },
                        { _type: "span", text: "." }
                    ]
                },
                {
                    _type: "block",
                    style: "h2",
                    children: [{ _type: "span", text: "The Energy of Creation" }]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "Vibecoding is the intersection of flow state, high-energy aesthetics, and rapid creation. It's about detaching from the 'grind' mindset and entering a state where the code just pours out of you, driven by a clear vision and the right atmosphere." }
                    ]
                },
                {
                    _type: "block",
                    style: "blockquote",
                    children: [
                        { _type: "span", text: "When you code with the right vibe, you don't just build software. You craft experiences." }
                    ]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "Updates in 2026 have shown us that AI handles the syntax. Our job now is the soul. The vibe. The intention behind the product. That's what separates a generic app from a piece of art." }
                    ]
                },
                {
                    _type: "block",
                    style: "h3",
                    children: [{ _type: "span", text: "How to Vibecode" }]
                },
                {
                    _type: "block",
                    style: "normal",
                    listItem: "bullet",
                    children: [
                        { _type: "span", text: "Set the Scene: Light implies focus. I prefer warm, dim lighting or neon accents." }
                    ]
                },
                {
                    _type: "block",
                    style: "normal",
                    listItem: "bullet",
                    children: [
                        { _type: "span", text: "The Playlist: This is non-negotiable. Synthwave, Lofi, or Deep House. Whatever gets you into rhythm." }
                    ]
                },
                {
                    _type: "block",
                    style: "normal",
                    listItem: "bullet",
                    children: [
                        { _type: "span", text: "Let Go of Perfection: Iterate fast. Fix it later. Maintain the momentum." }
                    ]
                }
            ]
        },
        {
            _id: "blog-2",
            title: "The Tech Stack of a Vibecoder",
            slug: { current: "tech-stack-vibecoder" },
            excerpt: "Next.js, AI, and a good playlist. My tools for rapid prototyping and high-vibe output.",
            category: "Tech",
            tags: ["Next.js", "AI", "Production"],
            publishedAt: "2026-01-18T14:30:00Z",
            readTime: 7,
            featuredImage: null,
            content: [
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "Speed is the currency of the modern web. If you can't ship fast, you miss the wave. My stack is curated not just for performance, but for developer experience and velocity." }
                    ]
                },
                {
                    _type: "block",
                    style: "h2",
                    children: [{ _type: "span", text: "The Foundation: Next.js & React" }]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "Next.js remains the king of frameworks in 2026. Data fetching, routing, and optimization are baked in. I pair it with Tailwind CSS. Writing CSS in classes keeps me in the flow—no context switching to separate files." }
                    ]
                },
                {
                    _type: "block",
                    style: "h2",
                    children: [{ _type: "span", text: "The Accelerator: AI Integration" }]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "I don't write boilerplate anymore. Cursor, Copilot, and custom scripts handle the scaffolding. My role is architect and conductor. I describe the feature, AI drafts the implementation, and I refine the logic and UI." }
                    ]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "This shift allows me to build 'full articles' and complex apps in a fraction of the time it took just a few years ago." }
                    ]
                },
                {
                    _type: "block",
                    style: "h2",
                    children: [{ _type: "span", text: "Deployment: Vercel" }]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "Zero config. Git push, and it's live. The time saved on DevOps is time spent on design and user experience." }
                    ]
                }
            ]
        },
        {
            _id: "blog-3",
            title: "From 9-5 to Flow State Founder",
            slug: { current: "from-9-5-to-flow-state-founder" },
            excerpt: "Why I left the traditional path to build things that matter, on my own terms. My journey to making a living with code.",
            category: "Career",
            tags: ["Entrepreneurship", "Freedom", "Build in Public"],
            publishedAt: "2026-01-15T09:00:00Z",
            readTime: 6,
            featuredImage: null,
            content: [
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "The cubicle walls were never going to contain me. It wasn't about the work; I loved the work. It was about the lack of ownership. The 9-5 grind felt like running on a treadmill—lots of effort, no forward motion." }
                    ]
                },
                {
                    _type: "block",
                    style: "h2",
                    children: [{ _type: "span", text: "The Breaking Point" }]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "In early 2024, I realized that my skills were valuable assets that I was renting out for a fraction of their worth. I decided to reclaim that equity." }
                    ]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "I started building on nights and weekends. Small tools, freelance gigs, anything that put me directly in touch with the value I created." }
                    ]
                },
                {
                    _type: "block",
                    style: "h2",
                    children: [{ _type: "span", text: "Living in 2026" }]
                },
                {
                    _type: "block",
                    style: "normal",
                    children: [
                        { _type: "span", text: "Now, I own my time. I wake up, I surf or workout, then I code. I choose the projects that excite me. 'Vibecoding' isn't just a buzzword; it's the philosophy that made this transition possible. If it doesn't bring energy, I don't do it." }
                    ]
                },
                {
                    _type: "block",
                    style: "blockquote",
                    children: [
                        { _type: "span", text: "Freedom is the ultimate ROI." }
                    ]
                }
            ]
        }
    ]
};
