'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
    Database,
    Cpu,
    Eye,
    FileText,
    Award,
    Settings,
    Building2,
    TrendingUp,
    Link as LinkIcon,
    BarChart3,
    FileOutput,
    ArrowRight,
} from 'lucide-react';

const inputAssembler = {
    name: 'Input Assembler',
    description: 'Collects and normalizes brand data, URLs, keywords, and competitive context',
    items: [
        'Brand Assets (logos, descriptions, metadata)',
        'Target URLs & Sitemap',
        'Keyword Lists (branded & non-branded)',
        'Competitor Domains',
        'Historical Performance Data',
    ],
};

const contextPack = {
    name: 'Context Pack',
    description: 'Enriches inputs with real-time AI platform signals and market intelligence',
    items: [
        'AI Platform API Data (ChatGPT, Gemini, Perplexity)',
        'Search Trend Analysis',
        'Entity Knowledge Graph',
        'SERP Feature Detection',
        'Competitive Intelligence',
    ],
};

const auditModules = [
    { name: 'AI Visibility', icon: Eye },
    { name: 'Content Quality', icon: FileText },
    { name: 'E-E-A-T', icon: Award },
    { name: 'Technical SEO', icon: Settings },
    { name: 'Brand Entity', icon: Building2 },
    { name: 'Competitive', icon: TrendingUp },
    { name: 'Citations', icon: LinkIcon },
];

const outputSurfaces = {
    name: 'Output Surfaces',
    description: 'Actionable insights delivered through multiple channels',
    items: [
        'Interactive Dashboard',
        'Detailed Audit Reports',
        'Alert Notifications',
        'API Access',
        'Export (PDF, CSV)',
    ],
};

export function ArchitectureView() {
    return (
        <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-surface-900 dark:text-white mb-4">
                    System Architecture
                </h1>
                <p className="text-surface-600 dark:text-surface-400">
                    Kasparro&apos;s AI-SEO audit pipeline processes brand data through four stages
                    to deliver actionable intelligence for AI-first search optimization.
                </p>
            </div>

            {/* Pipeline Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Input Assembler */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="h-full border-2 border-blue-500/20 bg-blue-500/5">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center mb-4">
                                <Database className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle>{inputAssembler.name}</CardTitle>
                            <CardDescription className="text-base">
                                {inputAssembler.description}
                            </CardDescription>
                            <ul className="mt-4 space-y-2">
                                {inputAssembler.items.map((item, i) => (
                                    <li key={i} className="text-sm text-surface-600 dark:text-surface-400 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardHeader>
                    </Card>
                </motion.div>

                {/* Context Pack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="h-full border-2 border-purple-500/20 bg-purple-500/5">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center mb-4">
                                <Cpu className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle>{contextPack.name}</CardTitle>
                            <CardDescription className="text-base">
                                {contextPack.description}
                            </CardDescription>
                            <ul className="mt-4 space-y-2">
                                {contextPack.items.map((item, i) => (
                                    <li key={i} className="text-sm text-surface-600 dark:text-surface-400 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardHeader>
                    </Card>
                </motion.div>

                {/* Audit Modules */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="h-full border-2 border-primary-500/20 bg-primary-500/5">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-4">
                                <BarChart3 className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle>Audit Modules</CardTitle>
                            <CardDescription className="text-base">
                                Seven specialized analysis modules for comprehensive AI-SEO audit
                            </CardDescription>
                            <div className="mt-4 grid grid-cols-2 gap-2">
                                {auditModules.map((module, i) => {
                                    const Icon = module.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800"
                                        >
                                            <Icon className="w-4 h-4 text-primary-500" />
                                            <span className="text-xs font-medium text-surface-700 dark:text-surface-300">
                                                {module.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardHeader>
                    </Card>
                </motion.div>

                {/* Output Surfaces */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Card className="h-full border-2 border-green-500/20 bg-green-500/5">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center mb-4">
                                <FileOutput className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle>{outputSurfaces.name}</CardTitle>
                            <CardDescription className="text-base">
                                {outputSurfaces.description}
                            </CardDescription>
                            <ul className="mt-4 space-y-2">
                                {outputSurfaces.items.map((item, i) => (
                                    <li key={i} className="text-sm text-surface-600 dark:text-surface-400 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardHeader>
                    </Card>
                </motion.div>
            </div>

            {/* Data Flow Arrows - Desktop */}
            <div className="hidden lg:flex justify-center items-center gap-4 -mt-4">
                <div className="flex items-center text-surface-400">
                    <span className="text-sm">Data flows through each stage</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
        </div>
    );
}
