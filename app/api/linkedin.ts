import { LinkedInProfile } from '@/types';

export async function getLinkedInProfile(): Promise<LinkedInProfile> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        name: 'Jane Doe',
        headline: 'Frontend Developer | React | Next.js | TypeScript',
        summary:
            'Passionate frontend developer with 5 years of experience building responsive and user-friendly web applications.',
        location: 'San Francisco Bay Area',
        profilePicture: '/placeholder.svg?height=200&width=200',
        experiences: [
            {
                title: 'Senior Frontend Developer',
                company: 'Tech Innovators Inc.',
                startDate: '2021-03-01',
                endDate: null,
                description:
                    'Lead frontend development for multiple high-traffic web applications.'
            },
            {
                title: 'Frontend Developer',
                company: 'Web Solutions Ltd.',
                startDate: '2018-06-01',
                endDate: '2021-02-28',
                description:
                    'Developed and maintained responsive web applications using React and TypeScript.'
            }
        ],
        skills: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
            'Responsive Design'
        ]
    };
}
