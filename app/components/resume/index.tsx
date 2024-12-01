'use client';

import Image from 'next/image';
import { LinkedInProfile } from '@/types';
import { formatDate } from '@/utils';

interface ResumeProps {
    profile: LinkedInProfile;
}

export default function Resume({ profile }: ResumeProps) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <Image
                    src={profile.profilePicture}
                    alt={profile.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                <p className="text-xl text-gray-600 mb-2">{profile.headline}</p>
                <p className="text-gray-500">{profile.location}</p>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-700">{profile.summary}</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                {profile.experiences.map((exp, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-gray-500">
                            {formatDate(exp.startDate)} -{' '}
                            {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                        </p>
                        <p className="text-gray-700 mt-2">{exp.description}</p>
                    </div>
                ))}
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}
