'use client';

import { motion } from 'framer-motion';
import { PdfPageConfig } from '@/types/page';

interface PdfPageProps {
    config: PdfPageConfig;
    embedded?: boolean;
}

export default function PdfPage({ config, embedded = false }: PdfPageProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={embedded ? '' : 'max-w-4xl mx-auto'}
        >
            <h1 className={`${embedded ? 'text-2xl' : 'text-4xl'} font-serif font-bold text-primary mb-4`}>
                {config.title}
            </h1>
            {config.description && (
                <p className={`${embedded ? 'text-base' : 'text-lg'} text-neutral-600 dark:text-neutral-500 mb-6 max-w-2xl`}>
                    {config.description}
                </p>
            )}
            <div className="mb-4 flex justify-end">
                <a
                    href={config.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent font-medium hover:underline"
                >
                    Open / Download PDF
                </a>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm bg-white dark:bg-neutral-900">
                <iframe
                    src={`${config.source}#view=FitH`}
                    title={config.title}
                    className="w-full border-0"
                    style={{ height: embedded ? '70vh' : '85vh', minHeight: '640px' }}
                />
            </div>
        </motion.div>
    );
}
