'use client';

import { AppSidebar } from '@/components/layouts/AppSidebar';
import { useEffect, useState } from 'react';

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    // Listen for sidebar collapse state
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebarCollapsed(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-surface-50 dark:bg-surface-950">
            <AppSidebar />
            <main className="ml-16 lg:ml-64 transition-all duration-300">
                <div className="min-h-screen p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
