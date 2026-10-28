'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface ProjectLink {
    title: string;
    href: string;
    subtitle?: string;
}

interface SelectedProjectsProps {
    items: ProjectLink[];
    title?: string;
}

export default function SelectedProjects({ items, title }: SelectedProjectsProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title || 'Selected Projects'}</h2>
            <div className="space-y-3">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-[rgba(148,163,184,0.24)] hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                    >
                        <h3 className="font-semibold text-primary leading-tight">{item.title}</h3>
                        {item.subtitle && (
                            <p className="text-sm text-neutral-500 mt-1">{item.subtitle}</p>
                        )}
                    </Link>
                ))}
            </div>
        </motion.section>
    );
}
