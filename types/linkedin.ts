export interface LinkedInProfile {
    name: string;
    headline: string;
    summary: string;
    location: string;
    profilePicture: string;
    experiences: Experience[];
    skills: string[];
}

export interface Experience {
    title: string;
    company: string;
    startDate: string;
    endDate: string | null;
    description: string;
}
