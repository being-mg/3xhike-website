import { NextResponse } from 'next/server';

const projects = [
    {
        id: 1,
        title: "Velvet",
        category: "Branding",
        video: "https://cdn.pixabay.com/video/2023/10/19/185732-876159677_tiny.mp4",
        description: "Rebranding for a luxury fashion house."
    },
    {
        id: 2,
        title: "Nexus",
        category: "Digital Marketing",
        video: "https://cdn.pixabay.com/video/2023/10/22/186175-877232014_tiny.mp4",
        description: "SEO campaign driving 200% growth."
    },
    {
        id: 3,
        title: "Pulse",
        category: "Social Media",
        video: "https://cdn.pixabay.com/video/2023/09/24/182069-867956976_tiny.mp4",
        description: "Viral TikTok campaign strategy."
    },
    {
        id: 4,
        title: "Strata",
        category: "Web Design",
        video: "https://cdn.pixabay.com/video/2024/01/13/196350-903066347_tiny.mp4",
        description: "Award-winning website redesign."
    }
];

export async function GET() {
    return NextResponse.json(projects);
}
