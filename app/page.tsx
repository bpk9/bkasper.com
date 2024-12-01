import { getLinkedInProfile } from './api/linkedin';
import { Resume } from './components';

export default async function Home() {
    const profile = await getLinkedInProfile();

    return (
        <main className="min-h-screen bg-gray-50">
            <Resume profile={profile} />
        </main>
    );
}
