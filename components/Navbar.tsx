'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    SkillBridge
                </Link>
                <div className="space-x-4">
                    <Link href="/login">
                        <Button variant="outline">Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button>Register</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}