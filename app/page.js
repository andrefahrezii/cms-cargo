// app/page.js
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to My Next.js App</h1>
            <p>
                Go to the <Link href="/login">Login Page</Link>.
            </p>
        </div>
    );
}
